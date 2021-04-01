import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import { vw, vh } from "react-native-viewport-units";

import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import reset from "../assets/reset.png";

const Choices = ({ setUserChoice, setCounter, counter, resetScore }) => {
  const userClickHandler = (move) => {
    // e.preventDefault();
    setUserChoice(move);
    setCounter(counter + 1);
  };
  return (
    <View style={styles.choicesview}>
      <View style={styles.Choices}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => userClickHandler("r")}
          id="r"
        >
          <Image style={styles.image} source={rock} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => userClickHandler("p")}
          id="p"
        >
          <Image style={styles.image} source={paper} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => userClickHandler("s")}
          id="s"
        >
          <Image style={styles.image} source={scissors} />
        </TouchableOpacity>

        <Text style={styles.text}>Make your move</Text>
        <TouchableOpacity style={styles.reset} onPress={() => resetScore()}>
          <Image source={reset} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  choicesview: {
    alignItems: "center",
    flex: 3,
    justifyContent: "flex-end",
  },
  Choices: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // flex: 1,
  },
  button: {
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 50,
    marginHorizontal: 15,
    height: 80,
    width: 80,
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: "white",
    alignSelf: "center",
    padding: 30,
  },
  reset: {
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 50,
    height: 80,
    width: 80,
    padding: 20,
    marginHorizontal: 50,
  },
  image: {
    height: 30,
    width: 30,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default Choices;
