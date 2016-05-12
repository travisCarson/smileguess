import { combineReducers } from 'redux';
import players from './players.js';
import messages from './messages.js';
import game from './game.js';
import routes from './routes.js';
import ui from './ui.js';
import user from './user.js';

const rootReducer = combineReducers({
  players,
  messages,
  game,
  routes,
  ui,
  user,
});

export default rootReducer;
