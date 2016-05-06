import { SOCKET_PLAYER_JOIN_GAME, SOCKET_PLAYER_LEAVE_GAME } from '../action_types/actionTypes.js';

const mergeNewPlayer = (state, player) => {
  const playersById = Object.assign({}, state.playersById);
  playersById[player.id] = player;
  return {
    ...state,
    players: Object.keys(playersById),
    playersById,
  };
};

const removePlayer = (state, userid) => {
  const playersById = Object.assign({}, state.playersById);
  delete playersById[userid];
  return {
    ...state,
    players: Object.keys(playersById),
    playersById,
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
