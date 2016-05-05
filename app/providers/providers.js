/* Import Actions */
import { joinGame, submitGuess } from '../actions/user.js';


/* Home Screen Providers*/
export const mapHomeScreen = {
  mapStateToProps() {
    return {
      joinGame,
    };
  },
  mapDispatchToProps(dispatch) {
    return {
      onJoinGame: (id) => {
        dispatch(joinGame(id));
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
      onSubmitGuess: (guess) => {
        dispatch(submitGuess(guess));
      },
    };
  },
};
