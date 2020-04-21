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
  Center,
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
                source={{ uri: item.image }}
                style={{ height: 320, width: null, flex: 1 }}
              />
            </CardItem>
            <Card>
              <CardItem style={{ marginTop: 10 }} cardBody>
                <Right>
                  <Body>
                    <Text
                      style={{
                        fontFamily: "Chalkboard SE",
                        fontSize: 18,
                        marginLeft: 50,
                      }}
                    >
                      {item.name}
                    </Text>
                  </Body>
                </Right>
              </CardItem>
              <CardItem>
                <Right>
                  <Body>
                    <Text
                      style={{
                        fontFamily: "Chalkboard SE",
                        fontSize: 18,
                        marginLeft: 10,
                      }}
                    >
                      Price: {item.price} JD
                    </Text>
                  </Body>
                </Right>
              </CardItem>
              <CardItem>
                {item.in_stock === 0 ? (
                  <>
                    <Body>
                      <Right>
                        <Text
                          style={{
                            backgroundColor: "red",
                            fontSize: 28,
                            fontFamily: "Chalkboard SE",
                          }}
                        >
                          Out Of Stock!
                        </Text>
                      </Right>
                    </Body>
                  </>
                ) : (
                  <>
                    <Right>
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
                      </Body>
                    </Right>
                    <Body>
                      <Button
                        rounded
                        style={{
                          marginLeft: 55,
                          backgroundColor: "rgb(70,144,69)",
                        }}
                        onPress={() => {
                          showMessage({
                            message: "Added To Cart",
                            type: "success",
                            duration: 2000,
                            backgroundColor: "yellow",
                            color: "rgb(70,144,69)",
                            titleStyle: {
                              fontSize: 20,
                              alignSelf: "center",
                            },
                          });
                          this.props.addItemToCart({
                            item: item,
                            quantity: this.state.quantity,
                          });
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Chalkboard SE",
                            fontWeight: "bold",
                            color: "yellow",
                          }}
                        >
                          Add
                        </Text>
                      </Button>
                    </Body>
                  </>
                )}
              </CardItem>
              <CardItem style={{ marginLeft: 100 }} cardBody>
                <Text
                  style={{
                    fontFamily: "Chalkboard SE",
                    fontSize: 18,
                  }}
                >
                  Available: {item.in_stock}
                </Text>
              </CardItem>
            </Card>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ItemDetail);
