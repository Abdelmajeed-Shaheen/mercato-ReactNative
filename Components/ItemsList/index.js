import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Content,
  List,
  Header,
  Icon,
  Input,
  Spinner,
  Text,
  Item,
} from "native-base";

import ItemComponent from "./Item";

import { clearItems } from "../../redux/actions";

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
    this.props.clearAllItems();
  };

  render() {
    if (this.props.loading) return <Spinner color="rgb(70,144,69)" />;

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
        {this.props.items.length ? (
          <List>{itemsList}</List>
        ) : (
          <Text>Sorry no items available</Text>
        )}
      </Content>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.itemState.items,
  loading: !state.itemState.items.length,
});

const mapDispatchToProps = (dispatch) => {
  return {
    clearAllItems: () => dispatch(clearItems()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
