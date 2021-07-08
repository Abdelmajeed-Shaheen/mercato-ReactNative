import React from "react";
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";
import { ImageBackground, View } from "react-native";
import { getItems } from "../../redux/actions";

import { ITEMS } from "../../Navigation/screenNames";

import deli from "../../assets/images/deli.jpeg";

import styles from "./styles";
import { connect } from "react-redux";

/**
 *
 * Just a reminder that the background image source should probably
 * be coming from the backend for each catagory.
 */

const CategoryItem = ({ category, getItems, navigation }) => (
  <ImageBackground source={{ uri: category.image }} style={styles.background}>
    <View style={styles.overlay} />
    <ListItem
      button
      style={styles.listitem}
      onPress={() => getItems(category.id, navigation.navigate(ITEMS))}
    >
      <Card style={styles.transparent}>
        <CardItem style={styles.transparent}>
          <Left>
            <Text style={styles.text}>{category.name}</Text>
            <Text note style={styles.text}>
              {category.distance}
            </Text>
          </Left>
        </CardItem>
      </Card>
    </ListItem>
  </ImageBackground>
);

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: (categoryID, navigation) =>
      dispatch(getItems(categoryID, navigation)),
  };
};
export default connect(null, mapDispatchToProps)(CategoryItem);
