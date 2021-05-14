import React from "react";
import { StyleSheet, Text, View , Dimensions} from "react-native";
const {height, width} = Dimensions.get('window');

const Result = ({ result }) => {
  return (
    <View>
      <Text style={styles.Result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Result: {
    fontSize: width / 10,
    color: "white",
    textAlign: "center",
    paddingVertical: 20,
    height: width /3,
  },
});

export default Result;
