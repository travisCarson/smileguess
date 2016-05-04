/* Import Dependencies */
import React, {
  AppRegistry,
  Component,
} from 'react-native';
import { Provider } from 'react-redux';

/* Import Store */
import configureStore from './app/store/configureStore.js';
const store = configureStore({});

/* Import Screens */
import HomeScreen from './app/screens/HomeScreen.js';

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
