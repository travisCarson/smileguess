/* Import Dependencies */
import React, {
  AppRegistry,
  Component,
} from 'react-native';
import { connect, Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';

/* Import Store */
import configureStore from './app/store/configureStore.js';
const store = configureStore({});

/* Set up router */
const RouterWithRedux = connect()(Router);

/* Import all scenes */
import Screens from './app/screens/Screens.js';

class smileguess extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={Screens} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('smileguess', () => smileguess);
