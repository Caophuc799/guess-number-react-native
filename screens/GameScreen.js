import { Button, View, StyleSheet, Text, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.gameContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>a</Text>
      </View>
      <View>
        <Text>Log</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 24,
  },
});
