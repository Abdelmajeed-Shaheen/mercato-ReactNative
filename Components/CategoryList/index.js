import React from "react";

import CategoryItem from "./CategoryItem";

import { connect } from "react-redux";

import {
  List,
  Content,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
} from "native-base";

import styles from "./styles";

const CategoryList = ({ categories, navigation }) => {
  const categoriesList = categories.map((category) => (
    <CategoryItem
      category={category}
      key={category.name}
      navigation={navigation}
    />
  ));
  return (
    <Content>
      <Header searchBar rounded style={styles.background}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search in categories" />
          <Icon name="store" />
        </Item>
        <Button transparent>
          <Text style={styles.yellow}>Search</Text>
        </Button>
      </Header>
      <List>{categoriesList}</List>
    </Content>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categoriesState.categories,
});

export default connect(mapStateToProps)(CategoryList);
