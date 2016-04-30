import { JOIN_GAME } from '../actions/user.js';

const initalState = {
  users: [],
};

const noAction = {
  type: 'NO_ACTION',
};

export default (state = initalState, action = noAction) => {
  switch (action.type) {
    case JOIN_GAME:
      return Object.assign({}, state, {
        users: state.users.concat([action.userid]),
      });
    default:
      return state;
  }
};
