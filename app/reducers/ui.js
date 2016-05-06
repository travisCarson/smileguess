import { UPDATE_UI_STATE } from '../action_types/actionTypes.js';
import { Dimensions } from 'react-native';

const updateUIState = (oldState = {}, newState = {}) => {
  const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
  const visibleSize = { screenHeight, screenWidth };
  return Object.assign({}, oldState, visibleSize, newState);
};

const initialState = updateUIState();

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case UPDATE_SCREEN_SIZE:
    //   return updateUIState(state);
    case UPDATE_UI_STATE:
      return updateUIState(state, action.payload);
    default:
      return state;
  }
};
