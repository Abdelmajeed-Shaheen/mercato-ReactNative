import React, { Component } from "react";

//Native
import { TextInput, TouchableOpacity, View, Text } from "react-native";

//Navigation
import { LOGIN } from "../../Navigation/screenNames";

//Redux
import { register } from "../../redux/actions/authentication";
import { connect } from "react-redux";

//StyleSheet
import styles from "./styles";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
  };

  render() {
    const { username, password, first_name, last_name } = this.state;
    const { register, navigation } = this.props;
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Sign up</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="First Name"
          placeholderTextColor="#A6AEC1"
          value={first_name}
          onChangeText={(first_name) => this.setState({ first_name })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Last Name"
          placeholderTextColor="#A6AEC1"
          value={last_name}
          onChangeText={(last_name) => this.setState({ last_name })}
        />
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
          onPress={() => register(this.state)}
        >
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.replace(LOGIN)}
        >
          Click here to log in!
        </Text>
      </View>
    );
  }
}

const mapDispatchToProps = { register };

export default connect(null, mapDispatchToProps)(Signup);
