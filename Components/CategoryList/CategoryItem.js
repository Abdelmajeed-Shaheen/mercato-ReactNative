import React from "react";
import { ListItem, Thumbnail, Text, Left, Body } from "native-base";

import logo from "../../assets/images/logo.png";

const CategoryItem = ({ category }) => (
  <ListItem thumbnail>
    <Left>
      <Thumbnail square source={logo} />
    </Left>
    <Body>
      <Text> {category.name}</Text>
    </Body>
  </ListItem>
);

export default CategoryItem;
