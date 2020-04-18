import React from "react";
import { Text, Button, List, Body, View, Icon } from "native-base";
import { connect } from "react-redux";
import { USER, LOGIN, CATEGORY } from "../../Navigation/screenNames";

/* a new action */
import { checkoutCart, removeAllItemsFromCart } from "../../redux/actions";
import CartItem from "./CartItem";

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
              onPress={
                user
                  ? () => checkoutCart({ date: new Date(), items: cart })
                  : () => navigation.navigate(USER, { screen: LOGIN })
              }
            >
              <Text>{user ? "Checkout" : "Login to checkout"}</Text>
            </Button>
          </>
        ) : null}

        <Icon
          name="shoppingcart"
          type="AntDesign"
          size={30}
          style={{ color }}
        />
        <Text>Your cart is empty</Text>

        <View>
          <Button
            success
            onPress={() => navigation.navigate(CATEGORY, { screen: CATEGORY })}
          >
            <Text>Shop Now</Text>
          </Button>
        </View>

        <View>
          <Button success onPress={() => removeAllItems()}>
            <Text>Remove All Items</Text>
          </Button>
        </View>
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
