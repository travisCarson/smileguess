export const JOIN_GAME = 'JOIN_GAME';
export const SUBMIT_GUESS = 'SUBMIT_GUESS';

export const joinGame = (userid) => ({
  type: JOIN_GAME,
  userid,
});

export const submitGuess = (guess) => ({
  type: SUBMIT_GUESS,
  guess,
});

