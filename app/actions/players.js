export const PLAYER_JOIN_GAME = 'PLAYER_JOIN_GAME';

export const playerJoinGame = (user) => ({
  type: PLAYER_JOIN_GAME,
  user,
});

