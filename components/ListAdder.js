import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
//import { StyleSheet, Text, View, ,  } from 'react-native';
import List from './List';

export default function ListAdder({ navigation }) {
  const [word, setWord] = useState('cool');
  const [list, setList] = useState([]);

  const handlePress = () => {
    setList((currList) => [word, ...currList]);
    setWord('');
  };

  const handleTextChange = (newWord) => {
    setWord(newWord);
  };

  const removeFromList = (index) => {
    setList((currentList) => {
      const copy = [...currentList];
      copy.splice(index, 1);
      return copy;
    });
  };
  return (
    <View style={styles.container}>
      <Button title="Return Home" onPress={() => navigation.navigate('Home')} />
      <Text>The word is {word}</Text>
      <TextInput
        onChangeText={handleTextChange}
        value={word}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
      />

      <List
        words={list}
        addToList={handlePress}
        removeFromList={removeFromList}
      />
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
