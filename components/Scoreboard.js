import React from "react";
import { StyleSheet, Text, View , Dimensions} from "react-native";

const {height, width} = Dimensions.get('window');

const Scoreboard = ({ userScore, compScore }) => {
  return (
    <View style={styles.scoreboard}>
      <Text style={styles.userbadge}>user</Text>
      <Text style={styles.compbadge}>comp</Text>
      <Text style={styles.score}>
        {userScore}:{compScore}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreboard: {
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 4,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    minWidth: width - 180,
    paddingVertical: 15,
    position: "relative",
    alignItems: "center",
    // backgroundColor:"red",
  },
  score: {
    color: "white",
    fontSize: width / 5,
    paddingHorizontal: width/8,
  },
  userbadge: {
    paddingHorizontal: 3,
    position: "absolute",
    backgroundColor: "#e2584d",
    color: "white",
    top: width / 7,
    left: -20,
    fontSize: width /20,
  },
  compbadge: {
    paddingHorizontal: 3,
    position: "absolute",
    backgroundColor: "#e2584d",
    color: "white",
    top: width /7,
    right: -27,
    fontSize: width /20,
  },
});

export default Scoreboard;
