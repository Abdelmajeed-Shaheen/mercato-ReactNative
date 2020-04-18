import React from "react";
import { Text, Button } from "native-base";
import { connect } from "react-redux";
import { USER, LOGIN } from "../../Navigation/screenNames";

/* a new action */
import { checkoutCart } from "../../redux/actions";
import CartItem from "./CartItem";

const ItemCart = ({ cart, user, checkoutCart, Navigation }) => {
  const cartItems = cart.map((item) => (
    <CartItem item={item} key={item.name} />
  ));

  return (
    <list>
      {cartItems.length ? (
        <>
          {cartItems}
          <Button
            full
            danger
            onPress={
              user
                ? () => checkoutCart({ date: new Date(), items: cart })
                : () => Navigation.Navigate(USER, { screen: LOGIN })
            }
          >
            <Text>{user ? "Checkout" : "Login to checkout"}</Text>
          </Button>
        </>
      ) : (
        <Text style={{ textAlign: "center" }}>Buy something</Text>
      )}
    </list>
  );
};

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user,
});

const mapDispatchToProps = { checkoutCart };

export default connect(mapStateToProps, mapDispatchToProps)(ItemCart);
