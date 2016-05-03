export const JOIN_GAME = 'JOIN_GAME';
export const SUBMIT_GUESS = 'SUBMIT_GUESS';

export const joinGame = (gameId = null) => ({
  type: JOIN_GAME,
  gameId,
});

export const submitGuess = (guess) => ({
  type: SUBMIT_GUESS,
  guess,
});
