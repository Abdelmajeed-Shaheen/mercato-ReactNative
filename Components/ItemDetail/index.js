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
  Content,
  Right,
} from "native-base";

import InputSpinner from "react-native-input-spinner";

import { Image } from "react-native";
// Style
import styles from "./styles";

/* trying to add items to cart */
import { addItemToCart } from "../../redux/actions";
import { connect } from "react-redux";

class ItemDetail extends Component {
  state = {
    quantity: 1,
  };

  render() {
    const { item } = this.props.route.params;
    return (
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: "Image URL" }} />
              <Body>
                <Text>{item.name}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{ uri: "Image URL" }}
                style={{ height: 200, width: 200, flex: 1 }}
              />
              <Body>
                <InputSpinner
                  max={item.in_stock}
                  min={1}
                  step={1}
                  color={"rgb(70,144,69)"}
                  value={this.state.quantity}
                  onChange={(num) => {
                    this.setState({ quantity: num });
                  }}
                />
              </Body>
            </Body>
          </CardItem>
          <Right>
            <Text>{item.price} JD</Text>
          </Right>
          <CardItem>
            <Body>
              <Button
                success
                onPress={() => this.props.addItemToCart(this.state)}
              >
                <Body>
                  <Text style={styles.yellow}>Add</Text>
                </Body>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ItemDetail);
