import React, { Component } from "react";

//Native
import { TextInput, TouchableOpacity, View, Text } from "react-native";

//StyleSheet
import styles from "./styles";

//Navigation
import { SIGNUP, CATEGORY } from "../../Navigation/screenNames";

//Redux
import { login } from "../../redux/actions/authentication";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    const { username, password } = this.state;
    const { login, navigation } = this.props;
    const redirectToCategoryList = () =>
      navigation.navigate(CATEGORY, { screen: CATEGORY });
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          value={username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => login(this.state, redirectToCategoryList)}
        >
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.navigate(SIGNUP)}
        >
          Click here to register!
        </Text>
      </View>
    );
  }
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
