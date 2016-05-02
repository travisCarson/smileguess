/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import HomeScreen from './app/screens/HomeScreen.js';

class smileguess extends Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}

AppRegistry.registerComponent('smileguess', () => smileguess);
