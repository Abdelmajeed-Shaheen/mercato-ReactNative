import React from "react";
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";
import { ImageBackground, View } from "react-native";

import deli from "../../assets/images/deli.jpeg";

import styles from "./styles";

const CategoryItem = ({ category }) => (
  <ImageBackground source={deli} style={styles.background}>
    <View style={styles.overlay} />
    <ListItem button style={styles.listitem}>
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

export default CategoryItem;
