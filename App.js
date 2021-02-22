import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import List from './components/List';
import SwipeGesture from './components/swipe-gesture';

export default function App() {
  const [word, setWord] = useState('cool');
  const [list, setList] = useState([]);
  
  const handlePress = () => {
    setList(currList => [word, ...currList]);
    setWord('');
  }

  const handleTextChange = (newWord) => {
    setWord(newWord)
  }

  const removeFromList = (index) => {
    setList(currentList => {
      const copy = [...currentList];
      copy.splice(index, 1);
      return copy
    })
  }
 

  return (
    <View style={styles.container}>
      <Text>The word is {word}</Text>
      <TextInput
      onChangeText={handleTextChange}
      value={word}
      style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}/>
     
          <List words={list} addToList={handlePress} removeFromList={removeFromList}/>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

