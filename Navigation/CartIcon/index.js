import React from "react";
import { Icon, Text, View } from "native-base";
import styles from "./styles";

const CartButton = () => (
  <View>
    <Icon name="shoppingcart" type="AntDesign" style={{ color }} />
    {quantity > 0 && (
      <View style={styles.badge}>
        <Text style={styles.text}>{quantity}</Text>
      </View>
    )}
  </View>
);

export default CartButton;
