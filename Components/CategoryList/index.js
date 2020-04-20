import React, { Component } from "react";

import CategoryItem from "./CategoryItem";

import { connect } from "react-redux";

import {
  List,
  Content,
  Header,
  Item,
  Input,
  Icon,
  Spinner,
  Text,
} from "native-base";

import styles from "./styles";

class CategoryList extends Component {
  state = {
    query: "",
    text: "",
  };

  setQuery = (query, text) => this.setState({ query, text });

  filterCategories = () => {
    const query = this.state.query.toLowerCase();
    return this.props.categories.filter((category) => {
      return `${category.name}`.toLowerCase().includes(query);
    });
  };

  render() {
    if (this.props.loading) return <Spinner color="rgb(70,144,69)" />;

    const { navigation } = this.props;
    const categoriesList = this.filterCategories().map((category) => (
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
            <Input
              placeholder="Search in categories"
              onChangeText={this.setQuery}
              value={this.state.query}
            />
            <Icon name="close" onPress={() => this.setState({ query: "" })} />
          </Item>
        </Header>

        <List>{categoriesList}</List>
      </Content>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categoriesState.categories,
  loading: !state.categoriesState.categories.length,
});

export default connect(mapStateToProps)(CategoryList);
