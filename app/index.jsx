import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Image } from 'react-native';
const RollDice = () => {

  const diceImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/512px-Dice-1-b.png", // Dice 1
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/512px-Dice-2-b.png", // Dice 2
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/512px-Dice-3-b.png", // Dice 3
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/512px-Dice-4-b.png", // Dice 4
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/512px-Dice-5-b.png", // Dice 5
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/512px-Dice-6-b.png", // Dice 6
  ];

const [currentDice, setCurrentDice] = useState(0);

const rolltheDice = () => {
  const generateNumber = Math.floor(Math.random() * 6)
  setCurrentDice(generateNumber)
}
  return (
    <View>
      <Text>Roll The Dice</Text>
      <Image 
      width={100}
      height={100}
      source={{uri: diceImages[currentDice]}}
      />

      <Pressable onPress={rolltheDice} >
        
        <View>
          <Text>
            Press to roll dice
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default RollDice

const styles = StyleSheet.create({})