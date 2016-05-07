import { SOCKET_PLAYER_JOIN_GAME, SOCKET_PLAYER_LEAVE_GAME } from '../action_types/actionTypes.js';

const mergeNewPlayer = (state, player) => {
  const all = Object.assign({}, state.all);
  all[player.id] = player;
  return {
    ...state,
    byId: Object.keys(all),
    all,
  };
};

const removePlayer = (state, userid) => {
  const all = Object.assign({}, state.all);
  delete all[userid];
  return {
    ...state,
    byId: Object.keys(all),
    all,
  };
};

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SOCKET_PLAYER_JOIN_GAME:
      return mergeNewPlayer(state, action.player);
    case SOCKET_PLAYER_LEAVE_GAME:
      return removePlayer(state, action.userid);
    default:
      return state;
  }
};
