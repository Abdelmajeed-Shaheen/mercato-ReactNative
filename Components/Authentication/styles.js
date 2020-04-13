import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgb(70,144,69)",
    paddingRight: 50,
    paddingLeft: 50,
  },
  authButtonText: {
    color: "rgb(254, 241, 5)",
    fontWeight: "bold",
    fontSize: 18,
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 60,
    paddingLeft: 60,
  },
  authOther: {
    color: "rgb(70,144,69)",
    marginTop: 15,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "rgb(70,144,69)",
    borderBottomColor: "rgb(70,144,69)",
    borderBottomWidth: 1,
  },
  authTitle: {
    color: "rgb(70,144,69)",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "rgb(70,144,69)",
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10,
  },
  profiletext: {
    textAlign: "left",
    color: "rgb(70,144,69)",
    fontSize: 16,
  },
});

export default styles;
