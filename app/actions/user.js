import { SEND_CLUE_MESSAGE, SEND_GUESS_MESSAGE } from '../action_types/actionTypes.js';

/**
 * Creates an action for submitting a guess to the server
 * This action is handled by the server
 */
export const submitGuess = (userid, message) => ({
  type: SEND_GUESS_MESSAGE,
  userid,
  message,
});

/**
 * This creates an action for the dealer to submit a clue
 * This action is handeled by the server
 */
export const submitClue = (userid, message) => ({
  type: SEND_CLUE_MESSAGE,
  userid,
  message,
});

