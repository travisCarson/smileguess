import { SUBMIT_GUESS } from '../actions/user.js';
import { SUBMIT_HINT } from '../actions/gameMaster.js';

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
