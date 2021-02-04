import { StyleSheet } from "react-native";
// var { vw, vh, vmin, vmax } = require("react-native-viewport-units");

export default StyleSheet.create({
  topButton: {
    marginTop: 50,
    height: 150,
    width: "95%",
    // borderTopLeftRadius: 0,
    // borderTopRightRadius: 105,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 105,
  },
  bottomButton: {
    marginTop: 50,
    // marginLeft: 21,
    height: 150,
    width: "95%",
    // borderTopLeftRadius: 105,
    // borderTopRightRadius: 0,
    // borderBottomLeftRadius: 105,
    // borderBottomRightRadius: 0,
    backgroundColor: "green",
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
  buttonTitles: {
    fontSize: 34,
    fontWeight: "bold",
  },
});
