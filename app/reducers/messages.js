import { SOCKET_CLUE_MESSAGE, SOCKET_GUESS_MESSAGE } from '../action_types/actionTypes.js';

export default (state = [], action = {}) => {
  switch (action.type) {
    case SOCKET_GUESS_MESSAGE:
      return state.concat([{
        type: 'guess',
        userid: action.userid,
        message: action.message,
      }]);
    case SOCKET_CLUE_MESSAGE:
      return state.concat([{
        type: 'clue',
        userid: action.userid,
        message: action.message,
      }]);
    default:
      return state;
  }
};
