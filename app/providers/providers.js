/* Import Actions */
import { joinGame, joinRandomGame, submitGuess } from '../actions/user.js';
import { Actions } from 'react-native-router-flux';

/* Home Screen Providers*/
export const mapHomeScreen = {
  mapStateToProps() {
    return {};
  },
  mapDispatchToProps(dispatch) {
    return {
      onJoinRandomGame: () => {
        dispatch(() => {
          dispatch(joinRandomGame());
          Actions.showGameScreen();
        });
      },
      onJoinGame: (id) => {
        dispatch(() => {
          dispatch(joinGame(id));
          Actions.showGameScreen();
        });
      },
    };
  },
};

/* Game Screen Providers*/
export const mapGameScreen = {
  mapStateToProps() {
    return {};
  },
  mapDispatchToProps(dispatch) {
    return {
      onSubmitGuess: (message) => {
        /**
         * TODO: remove hardcoded userid
         */
        dispatch(submitGuess(6, message));
      },
    };
  },
};
