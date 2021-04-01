import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    width: 200,
    paddingVertical: 15,
    position: "relative",
    alignItems: "center",
  },
  score: {
    color: "white",
    fontSize: 50,
  },
  userbadge: {
    paddingHorizontal: 3,
    position: "absolute",
    backgroundColor: "#e2584d",
    color: "white",
    top: 30,
    left: -15,
  },
  compbadge: {
    paddingHorizontal: 3,
    position: "absolute",
    backgroundColor: "#e2584d",
    color: "white",
    top: 30,
    right: -20,
  },
});

export default Scoreboard;
