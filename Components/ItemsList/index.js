import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Content,
  List,
  Header,
  Icon,
  Input,
  Button,
  Text,
  Item,
} from "native-base";

import ItemComponent from "./Item";

import styles from "./styles";

const ItemsList = ({ items, navigation }) => {
  const itemsList = items.map((item) => (
    <ItemComponent item={item} key={item.name} navigation={navigation} />
  ));
  return (
    <Content>
      <Header searchBar rounded style={styles.background}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios" />
        </Item>
        <Button transparent>
          <Text style={styles.yellow}>Search</Text>
        </Button>
      </Header>
      <List>{itemsList}</List>
    </Content>
  );
};

const mapStateToProps = (state) => ({ items: state.itemState.items });

export default connect(mapStateToProps)(ItemsList);
