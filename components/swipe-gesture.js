import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder
} from 'react-native';

export default class SwipeGesture extends Component {

  componentWillMount = () => {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        let x = gestureState.dx;
        let y = gestureState.dy;
        if (Math.abs(x) > Math.abs(y)) {
          if (x >= 0) {
            this.props.onSwipePerformed('right', this.props.index)
          }
          else {
            this.props.onSwipePerformed('left', this.props.index)
          }
        }
        else {
          if (y >= 0) {
            this.props.onSwipePerformed('down', this.props.index)
          }
          else {
            this.props.onSwipePerformed('up', this.props.index)
          }
        }
      }
    })
  }

  render() {
    return (
      <Animated.View {...this.PanResponder.panHandlers} style={this.props.gestureStyle}>
        <View>{this.props.children}</View>
      </Animated.View>
    )
  }
}
