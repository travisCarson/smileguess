import { UPDATE_UI_STATE } from '../action_types/actionTypes.js';
import { Dimensions } from 'react-native';

const updateUIState = (oldState = {}, changeState = {}) => {
  const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
  const screenSize = { screenHeight, screenWidth };

  const newState = Object.assign({}, oldState, screenSize, changeState);

  newState.keyboardHeight = newState.keyboardHeight || 0;
  newState.visibleHeight = newState.screenHeight - newState.keyboardHeight;
  newState.visibleWidth = newState.screenWidth;

  return newState;
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
