import React from "react";

import { Image } from "react-native";

import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

const Item = ({ item }) => (
  <Content>
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: "Image URL" }} />
          <Body>
            <Text>{item.name}</Text>
            <Text note></Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{ uri: "Image URL" }}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Text>Price:{item.price}</Text>
        </Left>
        <Body>
          <Text>In Stock:{item.in_stock}</Text>
        </Body>
      </CardItem>
    </Card>
  </Content>
);
export default Item;
