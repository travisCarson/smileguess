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
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/* Import Reducer */
import rootReducer from './app/reducers/index.js';

/* Import Screens */
import HomeScreen from './app/screens/HomeScreen.js';

let store = createStore(rootReducer);

class smileguess extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('smileguess', () => smileguess);
