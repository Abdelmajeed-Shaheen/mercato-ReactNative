import React, { Component } from "react";
import { connect } from "react-redux";
import { Content, List } from "native-base";

import Item from "./Item";

const ItemsList = ({ items }) => {
  const itemsList = items.map((item) => <Item item={item} key={item.name} />);
  return (
    <Content>
      <List>{itemsList}</List>
    </Content>
  );
};

const mapStateToProps = (state) => ({ items: state.itemState.items });

export default connect(mapStateToProps)(ItemsList);
