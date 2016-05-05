import { SEND_CLUE_MESSAGE } from '../action_types/actionTypes.js';

/**
 * This creates an action for the dealer to submit a clue
 * This action is handeled by the server
 */
export const submitClue = (userid, message) => ({
  type: SEND_CLUE_MESSAGE,
  userid,
  message,
});

