import { UPDATE_GAME_STATE } from '../action_types/actionTypes.js';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE_GAME_STATE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
