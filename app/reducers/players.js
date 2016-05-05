import { PLAYER_JOIN_GAME } from '../action_types/actionTypes.js';

const noAction = {
  type: 'NO_ACTION',
};

const mergeNewUser = (state, user) => {
  const newUser = {};
  newUser[user.id] = user;
  return Object.assign({}, state, newUser);
};

export default (state = {}, action = noAction) => {
  switch (action.type) {
    case PLAYER_JOIN_GAME:
      return mergeNewUser(state, action.user);
    default:
      return state;
  }
};
