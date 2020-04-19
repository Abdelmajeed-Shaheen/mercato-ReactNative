import React from "react";
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

import { connect } from "react-redux";

// Style
import styles from "./styles";

/* a new action */
import { removeItemFromCart } from "../../redux/actions";

/*trying to make this a real cart */

const CartItem = ({ item, removeItemFromCart }) => (
  <ListItem style={styles.listStyle}>
    <Left>
      <Text style={styles.name}>
        {item.item.name}
        {"\n"}Quantity: {item.quantity}
      </Text>
      <Text>{item.price}</Text>
    </Left>
    <Right>
      <Button transparent onPress={() => removeItemFromCart(item)}>
        <Icon name="trash" style={styles.red} />
      </Button>
    </Right>
  </ListItem>
);

mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
