import React from "react";
import { Icon, Text, View } from "native-base";
import styles from "./styles";
import { connect } from "react-redux";

import { quantityCounter } from "./quantityCounter";

const CartButton = ({ quantity, color }) => (
  <View>
    <Icon name="shoppingcart" type="AntDesign" style={{ color }} />
    {quantity > 0 && (
      <View style={styles.badge}>
        <Text style={styles.text}>{quantity}</Text>
      </View>
    )}
  </View>
);

const mapStateToProps = ({ cart }) => ({
  quantity: cart.length,
});

export default connect(mapStateToProps)(CartButton);
