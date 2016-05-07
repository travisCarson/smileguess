import { UPDATE_UI_STATE } from '../action_types/actionTypes.js';

/* This reduer is a placeholder for any pieces of UI state that need to be shared across
* screens
*/
export default (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE_UI_STATE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
