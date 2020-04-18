import React from "react";
import { Text, View, Footer, Icon } from "native-base";

import { connect } from "react-redux";
import LogoutButton from "./LogoutButton";

const Profile = ({ username }) => (
  <View>
    <Text>Hello {username}</Text>

    <LogoutButton />
  </View>
);

const mapStateToProps = ({ user }) => ({
  username: user?.username,
});

export default connect(mapStateToProps)(Profile);
