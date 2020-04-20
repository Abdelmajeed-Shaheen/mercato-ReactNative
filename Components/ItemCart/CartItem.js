import React from "react";
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Card,
  Content,
} from "native-base";

import logo from "../../assets/images/logo.png";

import { Image } from "react-native";

import { connect } from "react-redux";

// Style
import styles from "./styles";

/* a new action */
import { removeItemFromCart } from "../../redux/actions";

/*trying to make this a real cart */

const CartItem = ({ item, removeItemFromCart }) => (
  <Card>
    <ListItem style={styles.listStyle}>
      <Image
        source={{ uri: item.item.image }}
        style={{ height: 100, width: 50, flex: 0, marginBottom: 10 }}
      />
      <Body>
        <Left>
          <Text style={{ fontFamily: "Chalkboard SE" }}>
            {item.item.name}
            {"\n"}Quantity: {item.quantity}
          </Text>
          <Text
            style={{
              fontFamily: "Chalkboard SE",
              fontWeight: "bold",
              color: "green",
            }}
          >
            Total Price: {item.item.price * item.quantity} JOD
          </Text>
        </Left>
        <Right>
          <Button transparent onPress={() => removeItemFromCart(item)}>
            <Icon name="trash" style={styles.red} />
          </Button>
        </Right>
      </Body>
    </ListItem>
  </Card>
);

mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
