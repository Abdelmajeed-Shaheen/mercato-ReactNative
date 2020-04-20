import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Left,
  Body,
  Card,
  CardItem,
  Thumbnail,
  List,
  ListItem,
  Icon,
  Right,
  Container,
  Header,
  Content,
} from "native-base";

import InputSpinner from "react-native-input-spinner";

import { Image } from "react-native";
// Style
import styles from "./styles";

/* trying to add items to cart */
import { addItemToCart } from "../../redux/actions";
import { connect } from "react-redux";

import { showMessage, hideMessage } from "react-native-flash-message";
import logo from "../../assets/images/logo.png";

class ItemDetail extends Component {
  state = {
    quantity: 1,
  };

  render() {
    const { item } = this.props.route.params;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={logo}
                style={{ height: 320, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem style={{ marginTop: 10 }}>
              <Left>
                <Text
                  style={{
                    fontFamily: "Georgia",
                    fontSize: 24,
                    color: "green",
                  }}
                >
                  {item.name}
                </Text>
              </Left>
              <Body>
                <Text
                  style={{
                    fontFamily: "Georgia",
                    fontSize: 22,
                    color: "green",
                    marginLeft: 10,
                  }}
                >
                  {item.price} JD
                </Text>
              </Body>
              <Body>
                <Text
                  style={{
                    fontFamily: "Georgia",
                    fontSize: 22,
                    color: "green",
                  }}
                >
                  Available: {item.in_stock}
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ marginLeft: 100 }}>
              {item.in_stock === 0 ? (
                <>
                  <Body>
                    <Text
                      style={{
                        backgroundColor: "red",
                        fontSize: 28,
                        fontFamily: "Georgia",
                      }}
                    >
                      Out Of Stock!
                    </Text>
                  </Body>
                </>
              ) : (
                <>
                  <Body>
                    <InputSpinner
                      style={{ marginLeft: 12 }}
                      max={item.in_stock}
                      min={1}
                      inputStyle={{ fontSize: 24 }}
                      step={1}
                      color={"rgb(70,144,69)"}
                      value={this.state.quantity}
                      onChange={(num) => {
                        this.setState({ quantity: num });
                      }}
                    />

                    <Button
                      rounded
                      style={{
                        marginLeft: 55,
                        backgroundColor: "rgb(70,144,69)",
                      }}
                      onPress={() =>
                        this.props.addItemToCart({
                          item: item,
                          quantity: this.state.quantity,
                        })
                      }
                      onPressIn={() => {
                        showMessage({
                          message: "Added to cart",
                          type: "success",
                          duration: 2000,
                          backgroundColor: "#485460",
                          color: "#d2dae2",
                          titleStyle: {
                            fontSize: 20,
                            alignSelf: "center",
                          },
                        });
                      }}
                    >
                      <Text style={styles.yellow}>Add</Text>
                    </Button>
                  </Body>
                </>
              )}
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
    // return (
    //   <Content>
    //     <View>
    //       {/* <Left> */}
    //       {/* <Thumbnail source={{ uri: "Image URL" }} /> */}
    //       <Thumbnail
    //         source={logo}
    //         style={{
    //           height: 300,
    //           width: 300,
    //           marginLeft: 60,
    //         }}
    //       />
    //       <Text>{"\n"}</Text>
    //       <Text
    //         style={{
    //           fontSize: 24,
    //           fontFamily: "Georgia",
    //           color: "green",
    //           marginLeft: 160,
    //         }}
    //       >
    //         {item.name} {"\n"}
    //       </Text>

    //       {/* </Left> */}

    //       {/* <Body>
    //         <Image
    //           source={{ uri: "Image URL" }}
    //           style={{ height: 200, width: 200, flex: 1 }}
    //         />
    //       </Body> */}
    //       <Right>
    //         <Text
    //           style={{ fontSize: 28, fontFamily: "Georgia", color: "green" }}
    //         >
    //           {item.price} JD
    //         </Text>
    //         <Text>{"\n"}</Text>
    //       </Right>
    //       {item.in_stock === 0 ? (
    //         <Body>
    //           <Text
    //             style={{
    //               backgroundColor: "red",
    //               fontSize: 28,
    //               fontFamily: "Georgia",
    //             }}
    //           >
    //             Out Of Stock!
    //           </Text>
    //         </Body>
    //       ) : (
    //         <>
    //           <Body>
    //             <InputSpinner
    //               max={item.in_stock}
    //               min={1}
    //               step={1}
    //               color={"rgb(70,144,69)"}
    //               value={this.state.quantity}
    //               onChange={(num) => {
    //                 this.setState({ quantity: num });
    //               }}
    //             />
    //           </Body>
    //           <Body>
    //             <Button
    //               success
    //               onPress={() =>
    //                 this.props.addItemToCart({
    //                   item: item,
    //                   quantity: this.state.quantity,
    //                 })
    //               }
    //               onPressIn={() => {
    //                 showMessage({
    //                   message: "Added to cart",
    //                   type: "success",
    //                   duration: 2000,
    //                   backgroundColor: "#485460",
    //                   color: "#d2dae2",
    //                   titleStyle: {
    //                     fontSize: 20,
    //                     alignSelf: "center",
    //                   },
    //                 });
    //               }}
    //             >
    //               <Body>
    //                 <Text style={styles.yellow}>Add</Text>
    //               </Body>
    //             </Button>
    //           </Body>
    //         </>
    //       )}
    //     </View>
    //   </Content>
    // );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ItemDetail);
