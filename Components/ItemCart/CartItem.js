import React from "react";
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  View,
} from "native-base";

import { connect } from "react-redux";

// Style
import styles from "./styles";

/* a new action */
import { removeItemFromCart } from "../../redux/actions";

/*trying to make this a real cart */

const CartItem = ({ item, removeItemFromCart }) => (
  <View>
    <ListItem style={styles.listStyle}>
      <Left>
        <Text style={styles.name}>{item.item.name}</Text>
        <Text note style={styles}>
          {item.price}
        </Text>
      </Left>
      <Body>
        <Text style={styles}>{item.quantity}</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => removeItemFromCart(item)}>
          <Icon name="trash" style={styles.red} />
        </Button>
      </Right>
    </ListItem>
  </View>
);

mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
