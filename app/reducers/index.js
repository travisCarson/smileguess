import { combineReducers } from 'redux';
import players from './players.js';
import messages from './messages.js';
import routes from './routes.js';

const rootReducer = combineReducers({
  players,
  messages,
  routes,
});

export default rootReducer;

