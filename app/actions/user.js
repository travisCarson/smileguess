import { JOIN_GAME, SUBMIT_GUESS } from '../action_types/actionTypes.js';


export const joinGame = (gameId = null) => ({
  type: JOIN_GAME,
  gameId,
});

export const submitGuess = (guess) => ({
  type: SUBMIT_GUESS,
  guess,
});
