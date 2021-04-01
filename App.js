import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Result from "./components/Result";
import Choices from "./components/Choices";

const App = () => {
  const [result, setResult] = useState("Do you dare?");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [counter, setCounter] = useState(0);

  const smallUserWord = "(user)";
  const smallCompWord = "(comp)";

  useEffect(() => {
    getCompChoice();
    game();
  }, [counter]);

  const getCompChoice = () => {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    setCompChoice(choices[randomNumber]);
  };

  const convertToWord = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
  };

  const win = () => {
    setUserScore(userScore + 1);
    setResult(
      `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(
        compChoice
      )}${smallCompWord}`
    );
  };

  const lose = () => {
    setCompScore(compScore + 1);
    setResult(
      `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(
        compChoice
      )}${smallCompWord}`
    );
  };

  const draw = () => {
    setResult(`DRAW`);
  };

  const game = () => {
    switch (userChoice + compChoice) {
      case "rs":
      case "pr":
      case "sp":
        win();
        break;
      case "sr":
      case "rp":
      case "ps":
        lose();
        break;
      case "ss":
      case "rr":
      case "pp":
        draw();
        break;
    }
  };

  const resetScore = () => {
    setUserScore(0);
    setCompScore(0);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Scoreboard userScore={userScore} compScore={compScore} />
      <Result result={result} />
      <Choices
        setUserChoice={setUserChoice}
        setCounter={setCounter}
        counter={counter}
        resetScore={resetScore}
      />
      <View style={styles.bottomview}>
        <Text style={styles.bottomtext}>Made By Maryll Castelino</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24272E",
    flex: 1,
  },
  bottomtext: {
    color: "white",
  },
  bottomview: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    padding: 10,
  },
});

export default App;
