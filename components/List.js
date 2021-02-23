import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import SwipeGesture from './swipe-gesture';

const List = (props) => {
  //console.log(props);

  const handleSwipe = (direction, index) => {
    console.log(direction, index);
    if (direction === 'left') {
      console.log('left');
      props.removeFromList(index);
    }
  };
  return (
    <View>
      <Button title="add to list!" onPress={props.addToList} />
      {props.words.map((word, i) => {
        return (
          <View style={swipeStyles.textItem}>
            <SwipeGesture
              gestureStyle={swipeStyles.swipesGestureContainer}
              onSwipePerformed={handleSwipe}
              index={i}
            >
              <Text>{word}</Text>
            </SwipeGesture>
          </View>
        );
      })}
    </View>
  );
};

const swipeStyles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  swipesGestureContainer: {
    height: '100%',
    width: '100%',
  },
  textItem: {
    borderColor: '#61dafb',
    borderWidth: 4,
  },
});

export default List;
