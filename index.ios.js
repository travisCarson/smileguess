/* Import Dependencies */
import React, {
  AppRegistry,
  Component,
} from 'react-native';
import { connect, Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';

/* Import Store */
import configureStore from './app/store/configureStore.js';
const store = configureStore({});

/* Fetch user information */
fetch(`http://localhost:1234/api/user/${DeviceInfo.getUniqueID()}`)
  .then((res) => { // This `then` block should be removed when the server syncs up with ui development
    if (!res.ok) {
      return {
        id: 0,
        username: 'McFakerton',
        points: 0,
        wins: 0,
        emojicoins: 0,
        picture: '',
      };
    }
    return res;
  })
  .then((res) => res.json())
  .then((user) => {
    store.dispatch({
      type: 'UPDATE_USER_STATE',
      user,
    });
  });

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
