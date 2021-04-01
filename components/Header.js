import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.Header}>
      <Text style={styles.Text}>Rock Paper Scissors</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: 100,
    paddingBottom: 15,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  Text: {
    color: "#24272E",
    fontSize: 30,
    textAlign: "center",
  },
});

export default Header;
