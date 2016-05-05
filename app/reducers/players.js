import { SOCKET_PLAYER_JOIN_GAME } from '../action_types/actionTypes.js';

const mergeNewUser = (state, user) => {
  const newUser = {};
  newUser[user.id] = user;
  return Object.assign({}, state, newUser);
};

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SOCKET_PLAYER_JOIN_GAME:
      return mergeNewUser(state, action.user);
    default:
      return state;
  }
};
