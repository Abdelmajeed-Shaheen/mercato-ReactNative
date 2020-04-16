import React from "react";
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";

const CartItem = () => (
  <ListItem style={styles.listStyle}>
    <Left>
      <Text style={styles.drink}>Drin</Text>
      <Text note style={styles}>
        dsasd
      </Text>
    </Left>
    <Body>
      <Text style={styles}>dasdas</Text>
    </Body>
    <Right>
      <Button transparent onPress={() => alert("im not working yet")}>
        <Icon name="trash" style={styles} />
      </Button>
    </Right>
  </ListItem>
);

export default CartItem;
