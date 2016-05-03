/* Configure Store */

/* Import Dependencies */
import { createStore, applyMiddleware, compose } from 'redux';


/* Import Reducer */
import rootReducer from '../reducers/index.js';

/* Import Middleware */
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk)
    // devTools({
    //   name: 'Smile Guess',
    //   realtime: true,
    //   hostname: 'localhost',
    //   port: 8050,
    // })
  );
  return createStore(rootReducer, initialState, enhancer);
}
