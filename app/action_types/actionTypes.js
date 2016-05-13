/**
 * Server->Client: integrates `action.payload` into the message part of the store
 */
export const UPDATE_MESSAGE_STATE = 'UPDATE_MESSAGE_STATE';
/**
 * Server->Client: integrates `action.payload` into the user part of the store
 */
export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
/**
 * Server->Client: integrates `action.payload` into the game part of the store
 */
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';

/**
 * Client->Server: sent to server when the client wants to broadcast a guess
 */
export const SEND_GUESS_MESSAGE = 'server/sendGuessMessage';
/**
 * Client->Server: sent to server when the dealer wants to broadcast a clue
 */
export const SEND_CLUE_MESSAGE = 'server/sendClueMessage';

/**
 * Client->Client: sent from the view to update parts of the ui state being tracked in
 * the store.
 */
export const UPDATE_UI_STATE = 'UPDATE_UI_STATE';
