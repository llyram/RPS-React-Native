import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const {height, width} = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.Header}>
      <Text style={styles.Text}>Rock Paper Scissors</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: width / 3,
    paddingBottom: 15,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  Text: {
    color: "#24272E",
    fontSize: height / 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Header;
