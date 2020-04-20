import React from "react";
import { Text, View, Footer, Body, Header } from "native-base";

import { connect } from "react-redux";
import LogoutButton from "./LogoutButton";

const Profile = ({ username }) => (
  <View>
    <Header>
      <Text>Hello {username}</Text>
    </Header>

    <Footer>
      <LogoutButton />
    </Footer>
  </View>
);

const mapStateToProps = ({ user }) => ({
  username: user?.username,
});

export default connect(mapStateToProps)(Profile);
