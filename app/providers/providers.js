/* Import Actions */
import { joinGame } from '../actions/user.js';


/* Home Screen Providers*/
export const mapHomeScreen = {
  mapStateToProps() {
    return {};
  },
  mapDispatchToProps(dispatch) {
    return {
      onJoinGame: (id) => {
        dispatch(joinGame(id));
      },
    };
  },
};
