import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Result = ({ result }) => {
  return (
    <View>
      <Text style={styles.Result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Result: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    paddingVertical: 20,
    height: 120,
  },
});

export default Result;
