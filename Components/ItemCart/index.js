import React from "react";
import { Text, Button, List, Body, View, Icon, Left } from "native-base";
import { connect } from "react-redux";
import { USER, LOGIN, CATEGORY } from "../../Navigation/screenNames";

/* a new action */
import { checkoutCart, removeAllItemsFromCart } from "../../redux/actions";
import CartItem from "./CartItem";

/* Basheera_desiging is designing the Cart Item YAAAAY */

const ItemCart = ({
  cart,
  user,
  checkoutCart,
  navigation,
  removeAllItems,
  color,
}) => {
  const cartItems = cart.map((item) => (
    <CartItem item={item} key={item.item.name} />
  ));

  return (
    <Body>
      <List>
        {cartItems.length ? (
          <>
            {cartItems}

            <Button
              success
              rounded
              style={{
                width: 225,
                justifyContent: "center",
                position: "sticky",
                // bottom: 0,
                marginBottom: 0,
                marginLeft: 7,

                // marginTop: 350,
              }}
              onPress={
                user
                  ? () => checkoutCart({ date: new Date(), items: cart })
                  : () => navigation.navigate(USER, { screen: LOGIN })
              }
            >
              <Text style={{ fontSize: 18, fontFamily: "Georgia" }}>
                {user ? "Checkout" : "Login to checkout"}
              </Text>
            </Button>

            <Button
              danger
              rounded
              style={{
                width: 225,
                position: "absolute",
                bottom: 0,
                right: 0,
                justifyContent: "center",
                marginRight: 7,

                // marginTop: 100,
              }}
              onPress={() => removeAllItems()}
            >
              <Text style={{ fontFamily: "Georgia" }}>Remove All Items</Text>
            </Button>
          </>
        ) : (
          <>
            <Text
              style={{
                fontSize: 24,
                marginTop: 250,
                alignSelf: "center",
                marginBottom: 5,
                fontFamily: "Georgia",
              }}
            >
              Your cart is empty
            </Text>

            <View>
              <Button
                success
                rounded
                style={{
                  width: 225,
                  justifyContent: "center",
                  position: "sticky",
                  // bottom: 0,

                  marginLeft: 7,

                  // marginTop: 350,
                }}
                onPress={() =>
                  navigation.navigate(CATEGORY, { screen: CATEGORY })
                }
              >
                <Text style={{ fontFamily: "Georgia", fontSize: 24 }}>
                  Shop Now
                </Text>
              </Button>
            </View>
          </>
        )}

        {/* <Icon
          name="shoppingcart"
          type="AntDesign"
          size={30}
          style={{ color }}
        /> */}
      </List>
    </Body>
  );
};

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    checkoutCart,
    removeAllItems: () => dispatch(removeAllItemsFromCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCart);
