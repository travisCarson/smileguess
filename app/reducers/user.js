import { UPDATE_USER_STATE } from '../action_types/actionTypes.js';

/**
 * This adds the user to the store upon starting the app
 */
export default (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_STATE:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};
