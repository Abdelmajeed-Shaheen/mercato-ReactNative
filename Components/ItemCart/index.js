import React, { Component } from "react";
import { Text, Button, List, Body, View, Icon, Content } from "native-base";
import { connect } from "react-redux";
import {
  USER,
  LOGIN,
  CATEGORY,
  THANKYOU,
  CART,
} from "../../Navigation/screenNames";

/* a new action */
import { checkoutCart, removeAllItemsFromCart } from "../../redux/actions";
import CartItem from "./CartItem";

import styles from "./styles";

class ItemCart extends Component {
  render() {
    const {
      cart,
      user,
      checkoutCart,
      navigation,
      removeAllItems,
      color,
    } = this.props;
    const cartItems = cart.map((item) => (
      <CartItem item={item} key={item.item.name} />
    ));
    return (
      <Content>
        <List>
          {cartItems.length ? (
            <>
              {cartItems}

              <Button
                success
                rounded
                style={{
                  width: 225,
                  position: "sticky",
                  marginBottom: 0,
                  marginLeft: 1,
                  backgroundColor: "rgb(70,144,69)",
                }}
                onPress={
                  user
                    ? () => {
                        checkoutCart(cart),
                          navigation.navigate(CART, { screen: THANKYOU });
                      }
                    : () => navigation.navigate(USER, { screen: LOGIN })
                }
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Chalkboard SE",
                    marginRight: 40,
                    marginLeft: -5,
                    color: "yellow",
                  }}
                >
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
                  marginLeft: 150,
                  backgroundColor: "rgb(200,1,1)",
                }}
                onPress={() => removeAllItems()}
              >
                <Text style={{ fontFamily: "Chalkboard SE", marginLeft: 50 }}>
                  Remove All Items
                </Text>
              </Button>
            </>
          ) : (
            <>
              <Body>
                <Text
                  style={{
                    fontSize: 24,
                    marginTop: 250,
                    alignSelf: "center",
                    marginBottom: 5,
                    fontFamily: "CourierNewPS-BoldItalicMT",
                  }}
                >
                  Your cart is empty
                </Text>
                <Icon name="shoppingcart" type="AntDesign" style={{ color }} />

                <View>
                  <Button
                    success
                    rounded
                    style={{
                      width: 225,
                      justifyContent: "center",
                      position: "sticky",
                      marginLeft: 7,
                      marginBottom: 10,
                    }}
                    style={styles.shopButton}
                    onPress={() =>
                      navigation.navigate(CATEGORY, { screen: CATEGORY })
                    }
                  >
                    <Text
                      style={{
                        fontFamily: "CourierNewPS-BoldItalicMT",
                        fontSize: 24,
                      }}
                    >
                      Shop Now
                    </Text>
                  </Button>
                </View>
              </Body>
            </>
          )}
        </List>
      </Content>
    );
  }
}

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    checkoutCart: (cart) => dispatch(checkoutCart(cart)),
    removeAllItems: () => dispatch(removeAllItemsFromCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCart);
