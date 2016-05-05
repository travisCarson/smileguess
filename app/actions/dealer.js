import { SUBMIT_HINT } from '../action_types/actionTypes.js';

export const submitHint = (hint) => ({
  type: SUBMIT_HINT,
  hint,
});
