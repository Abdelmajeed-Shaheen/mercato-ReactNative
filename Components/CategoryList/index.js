import React from "react";

import CategoryItem from "./CategoryItem";

import { connect } from "react-redux";

import { List, Content } from "native-base";

const CategoryList = ({ categories }) => {
  const categoriesList = categories.map((category) => (
    <CategoryItem category={category} key={category.name} />
  ));
  {console.log(categories)}
  return (
    <Content>
     <List>{categoriesList}</List>
    </Content>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categoriesState.categories,
});

export default connect(mapStateToProps)(CategoryList);
