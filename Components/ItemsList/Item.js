import React from "react";

import { Image, TouchableOpacity } from "react-native";
import { ITEM } from "../../Navigation/screenNames";

import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

import logo from "../../assets/images/logo.png";

const ItemComponent = ({ item, navigation }) => (
  <Content>
    <TouchableOpacity onPress={() => navigation.navigate(ITEM, { item })}>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note></Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={logo} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
            <Text>Price: {item.price} Jd</Text>
          </Left>
          <Right>
            <Body>
              <Text>In Stock: {item.in_stock}</Text>
            </Body>
          </Right>
          <Body></Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  </Content>
);
export default ItemComponent;
