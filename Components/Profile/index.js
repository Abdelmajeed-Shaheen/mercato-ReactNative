import React from "react";
import {
  Text,
  View,
  Footer,
  Icon,
  Body,
  Container,
  Content,
} from "native-base";

import { connect } from "react-redux";
import LogoutButton from "./LogoutButton";

const Profile = ({ username }) => (
  <Container>
    <Text
      style={{
        fontSize: 24,
        fontFamily: "Chalkboard SE",
        color: "green",
        alignSelf: "center",
      }}
    >
      User information
    </Text>

    <Text style={{ marginLeft: 10, marginTop: 30 }}>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Chalkboard SE",
        }}
      >
        First name:{" "}
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Chalkboard SE",
          color: "green",
        }}
      >
        Basheera
      </Text>
    </Text>

    <Text style={{ marginTop: 30, marginLeft: 10 }}>
      <Text
        style={{
          fontFamily: "Chalkboard SE",
          fontSize: 24,
        }}
      >
        Last name:{" "}
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Chalkboard SE",
          color: "green",
        }}
      >
        Qaddour Alainya
      </Text>
    </Text>

    <Text style={{ marginTop: 30, marginLeft: 10 }}>
      <Text
        style={{
          fontFamily: "Chalkboard SE",
          fontSize: 24,
        }}
      >
        E-mail:{" "}
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Chalkboard SE",
          color: "green",
        }}
      >
        ainyabasheera@gmail.com
      </Text>
    </Text>

    <Text style={{ marginTop: 30, marginLeft: 10 }}>
      <Text
        style={{
          fontFamily: "Chalkboard SE",
          fontSize: 24,
        }}
      >
        You are loged in as:{" "}
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Chalkboard SE",
          color: "green",
        }}
      >
        {username}
      </Text>
    </Text>

    <LogoutButton />
  </Container>
);

const mapStateToProps = ({ user }) => ({
  username: user?.username,
});

export default connect(mapStateToProps)(Profile);
