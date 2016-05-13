import { UPDATE_MESSAGE_STATE } from '../action_types/actionTypes.js';

export default (state = [], action = {}) => {
  switch (action.type) {
    case UPDATE_MESSAGE_STATE:
      return Object.assign({}, state, action.playload);
    default:
      return state;
  }
};
