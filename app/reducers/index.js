import { combineReducers } from 'redux';
import players from './players.js';
import messages from './messages.js';

const rootReducer = combineReducers({
  players,
  messages,
});

export default rootReducer;

