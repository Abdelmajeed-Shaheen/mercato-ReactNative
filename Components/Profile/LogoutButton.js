import React from "react";
import { Button, Text, Content } from "native-base";

import { connect } from "react-redux";

import { logout } from "../../redux/actions/authentication";

const LogoutButton = ({ logout }) => (
  <Content>
    <Text
      style={{
        marginTop: 230,
        fontSize: 24,
        fontFamily: "Chalkboard SE",
        alignSelf: "center",
      }}
    >
      Change account?
    </Text>
    <Button
      full
      danger
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
  </Content>
);

const mapDispatchToProps = {
  logout,
};

export default connect(null, mapDispatchToProps)(LogoutButton);
