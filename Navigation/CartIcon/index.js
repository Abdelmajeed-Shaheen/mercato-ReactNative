import React from "react";
import { Icon, Text, View } from "native-base";
import styles from "./styles";

const CartButton = ({ color }) => (
  <View>
    <Icon name="shoppingcart" type="AntDesign" style={{ color }} />

    <View>
      <Text style={styles.text}></Text>
    </View>
  </View>
);

export default CartButton;
