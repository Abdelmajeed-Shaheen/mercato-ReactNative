import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: "red",
    borderRadius: 6,
    minHeight: 12,
    minWidth: 12,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "white", fontSize: 10, fontWeight: "bold" },
});
export default styles;
