/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import diceOne from '../src/assets/diceOne.png';
import diceTwo from '../src/assets/diceTwo.png';
import diceThree from '../src/assets/diceThree.png';
import diceFour from '../src/assets/diceFour.png';
import diceFive from '../src/assets/diceFive.png';
import diceSix from '../src/assets/diceSix.png';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export default function App() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne);

  const rollTheDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(diceOne);
        break;
      case 2:
        setDiceImage(diceTwo);
        break;
      case 3:
        setDiceImage(diceThree);
        break;
      case 4:
        setDiceImage(diceFour);
        break;
      case 5:
        setDiceImage(diceFive);
        break;
      case 6:
        setDiceImage(diceSix);
        break;

      default:
        setDiceImage(diceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger('impactHeavy', options);
  };

  return (
    <>
      <StatusBar backgroundColor={'#DA0037'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContainer}>
          <Image style={styles.diceImage} source={diceImage} />
          <TouchableOpacity style={styles.rollButton} onPress={rollTheDice}>
            <Text style={styles.rollButtonText}>Roll The Dice</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFBF6',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  centerContainer: {
    alignItems: 'center',
  },
  diceImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  rollButton: {
    backgroundColor: '#DA0037',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  rollButtonText: {
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#FEFBF6',
  },
});
