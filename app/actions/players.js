import { PLAYER_JOIN_GAME } from '../action_types/actionTypes.js';


export const playerJoinGame = (user) => ({
  type: PLAYER_JOIN_GAME,
  user,
});
