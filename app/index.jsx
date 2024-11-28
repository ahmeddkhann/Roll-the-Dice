import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Image,
} from 'react-native';
import React, { useState, useRef } from 'react';

const RollDice = () => {
  const diceImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/512px-Dice-1-b.png", // Dice 1
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/512px-Dice-2-b.png", // Dice 2
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/512px-Dice-3-b.png", // Dice 3
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/512px-Dice-4-b.png", // Dice 4
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/512px-Dice-5-b.png", // Dice 5
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/512px-Dice-6-b.png", // Dice 6
  ];

  const diceMessages = [
    "You rolled a 1! Try again for a better roll.",
    "You rolled a 2! Not bad, keep going!",
    "You rolled a 3! Halfway there!",
    "You rolled a 4! Nice roll!",
    "You rolled a 5! Great roll!",
    "You rolled a 6! 🎉 Congratulations!",
  ];

  const [currentDice, setCurrentDice] = useState(0);
  const spinValue = useRef(new Animated.Value(0)).current;

  const rollTheDice = () => {
  
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 700, 
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      spinValue.setValue(0);

      const generateNumber = Math.floor(Math.random() * 6);
      setCurrentDice(generateNumber);
    });
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎲 Roll The Dice 🎲</Text>
      <Animated.Image
        style={[styles.diceImage, { transform: [{ rotate: spin }] }]}
        source={{ uri: diceImages[currentDice] }}
      />
      <Text style={styles.message}>{diceMessages[currentDice]}</Text>
      <Pressable style={styles.button} onPress={rollTheDice}>
        <Text style={styles.buttonText}>Press to Roll Dice</Text>
      </Pressable>
    </View>
  );
};

export default RollDice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  diceImage: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  message: {
    fontSize: 18,
    color: "#555",
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});
