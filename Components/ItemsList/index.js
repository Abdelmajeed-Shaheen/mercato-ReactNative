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

import clearItems from "../../redux/actions/items";

import styles from "./styles";

class ItemsList extends Component {
  state = {
    query: "",
  };

  setQuery = (query) => this.setState({ query });

  filterCategories = () => {
    const query = this.state.query.toLowerCase();
    return this.props.items.filter((item) => {
      return `${item.name}`.toLowerCase().includes(query);
    });
  };

  componentWillUnmount = () => {
    this.props.clearAllItems;
  };

  render() {
    const { navigation } = this.props;
    const itemsList = this.filterCategories().map((item) => (
      <ItemComponent item={item} key={item.name} navigation={navigation} />
    ));
    return (
      <Content>
        <Header searchBar rounded style={styles.background}>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              value={this.state.query}
              onChangeText={this.setQuery}
            />
            <Icon name="close" onPress={() => this.setState({ query: "" })} />
          </Item>
        </Header>

        <List>{itemsList}</List>
      </Content>
    );
  }
}

const mapStateToProps = (state) => ({ items: state.itemState.items });

const mapDispatchToProps = (dispatch) => {
  return {
    clearAllItems: () => dispatch(clearItems()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
