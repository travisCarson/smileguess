import { UPDATE_UI_STATE } from '../action_types/actionTypes.js';

/**
 * This creates an action to update some part of the ui state that is being
 * tracked in the store.
 */
export const updateUIState = (payload) => ({
  type: UPDATE_UI_STATE,
  payload,
});
