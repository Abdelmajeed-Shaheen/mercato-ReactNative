import React, { Component } from "react";

import { Image, TouchableOpacity } from "react-native";
import { ITEM } from "../../Navigation/screenNames";

import { addItemToCart } from "../../redux/actions";

import InputSpinner from "react-native-input-spinner";

import { showMessage, hideMessage } from "react-native-flash-message";

import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Footer,
} from "native-base";

import logo from "../../assets/images/logo.png";

import styles from "./styles";
import { connect } from "react-redux";
class ItemComponent extends Component {
  state = {
    quantity: 1,
  };

  render() {
    const { item, navigation } = this.props;
    return (
      <Content>
        <TouchableOpacity onPress={() => navigation.navigate(ITEM, { item })}>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text
                    style={{ fontFamily: "Chalkboard SE", fontWeight: "bold" }}
                  >
                    {item.name}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: item.image }}
                style={{ height: 200, width: 200, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Text
                  style={{ fontFamily: "Chalkboard SE", fontWeight: "bold" }}
                >
                  Price: {item.price} Jd
                </Text>
              </Left>
              <Right>
                <Body>
                  <Text
                    style={{ fontFamily: "Chalkboard SE", fontWeight: "bold" }}
                  >
                    In Stock: {item.in_stock}
                  </Text>
                </Body>
              </Right>
            </CardItem>
            <Body>
              <InputSpinner
                value=""
                style={styles.spinner}
                color="rgb(70,144,69)"
                min={1}
                max={item.in_stock}
                value={this.state.quantity}
                onChange={(num) => {
                  this.setState({ quantity: num });
                }}
                rounded={false}
                showBorder
              />
            </Body>

            <Button
              style={{
                marginLeft: 150,
                marginRight: 150,
                marginTop: 7,
                backgroundColor: "rgb(70,144,69)",
                justifyContent: "center",
              }}
              onPress={() => {
                showMessage({
                  message: "Added to cart",
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
          </Card>
        </TouchableOpacity>
      </Content>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ItemComponent);
