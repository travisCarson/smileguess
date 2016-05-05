import { SUBMIT_GUESS, SUBMIT_HINT } from '../action_types/actionTypes.js';

const noAction = {
  type: 'NO_ACTION',
};

export default (state = [], action = noAction) => {
  switch (action.type) {
    case SUBMIT_GUESS:
      return state.concat([action.guess]);
    case SUBMIT_HINT:
      return state.concat([action.hint]);
    default:
      return state;
  }
};
