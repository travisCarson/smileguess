import { combineReducers } from 'redux';
import players from './players.js';
import messages from './messages.js';
import routes from './routes.js';
import ui from './ui.js';

const rootReducer = combineReducers({
  players,
  messages,
  routes,
  ui,
});

export default rootReducer;
