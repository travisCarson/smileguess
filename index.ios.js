/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/* Import Dependencies */
import React, {
  AppRegistry,
  Component,
} from 'react-native';

/* Import Screens */
import HomeScreen from './app/screens/HomeScreen.js';

/* Import Actions */
import { joinGame } from './app/actions/user.js';

class smileguess extends Component {
  render() {
    return (
      <HomeScreen onJoinGame={joinGame} />
    );
  }
}

AppRegistry.registerComponent('smileguess', () => smileguess);
