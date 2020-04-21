import React from "react";
import { Button, Text, Content, Body } from "native-base";

import { connect } from "react-redux";

import { logout } from "../../redux/actions/authentication";

const LogoutButton = ({ logout }) => (
  <Content>
    <Body>
      <Button
        full
        danger
        rounded
        style={{
          marginTop: 10,
        }}
        onPress={logout}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Chalkboard SE",

            justifyContent: "center",
          }}
        >
          Logout
        </Text>
      </Button>
    </Body>
  </Content>
);

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(LogoutButton);
