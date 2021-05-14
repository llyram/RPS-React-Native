import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
// import { vw, vh } from "react-native-viewport-units";

const {height, width} = Dimensions.get('window');

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
      </View>
      <Text style={styles.text}>Make your move{width}</Text>
      <TouchableOpacity style={styles.button} onPress={() => resetScore()}>
        <Image style={styles.image} source={reset} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  choicesview: {
    alignItems: "center",
    flex: 4,
    // backgroundColor: "yellow",
    justifyContent: "center",
  },
  Choices: {
    // backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // flexWrap: "wrap",
    flex: 1,

  },
  button: {
    // backgroundColor: "white",
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 50,
    marginHorizontal: 15,
    height: width / 5,
    width: width / 5,
  },

  image: {
    height: 30,
    width: 30,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  text: {
    fontSize: width/20,
    color: "white",
    flex: 1,
    // alignSelf: "center",
    // padding: 30,
  },
});

export default Choices;
