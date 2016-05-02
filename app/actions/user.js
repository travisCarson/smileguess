export const JOIN_GAME = 'JOIN_GAME';
export const SUBMIT_GUESS = 'SUBMIT_GUESS';

export const joinGame = (user) => ({
  type: JOIN_GAME,
  user,
});

export const submitGuess = (guess) => ({
  type: SUBMIT_GUESS,
  guess,
});

