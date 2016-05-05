import { JOIN_RANDOM_GAME, JOIN_GAME, SEND_GUESS_MESSAGE } from '../action_types/actionTypes.js';

/**
 * Creates an action for joining a specific game by ID
 * This action is handled by the server
 * @param {number} gameid The ID of the game to join
 */
export const joinGame = (gameId = null) => ({
  type: JOIN_GAME,
  gameId,
});

/**
 * Creates an action for joining a random game chosen by the server
 * This action is handled by the server
 */
export const joinRandomGame = () => ({
  type: JOIN_RANDOM_GAME,
});

/**
 * Creates an action for submitting a guess to the server
 * This action is handled by the server
 */
export const submitGuess = (userid, message) => ({
  type: SEND_GUESS_MESSAGE,
  userid,
  message,
});

