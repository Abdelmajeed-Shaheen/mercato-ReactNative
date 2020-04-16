import React, { Component } from "react";
import { Text, View, Button } from "native-base";

const ItemCart = () => {
  return (
    <View>
      <Button full danger onPress={() => alert("i dont work yet")}>
        <Text>Checkout</Text>
      </Button>
      <Text style={{ textAlign: "center" }}>Buy something</Text>
    </View>
  );
};

export default ItemCart;
