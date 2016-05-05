jest.unmock('../messages.js');
import messagesReducer from '../messages.js';
import { SOCKET_GUESS_MESSAGE, SOCKET_CLUE_MESSAGE } from '../../action_types/actionTypes.js';

let action = {
  userid: 5,
  message: 'leaf',
};

describe('messages reducer', () => {
  it('should return the initial state', () => {
    expect(messagesReducer(undefined, {})).toEqual([]);
  });
  it('should handle SOCKET_GUESS_MESSAGE', () => {
    action.type = SOCKET_GUESS_MESSAGE;
    const newState = messagesReducer([], action);
    expect(Array.isArray(newState)).toBe(true);
    expect(newState.length).toEqual(1);
    expect(newState[0].type).toEqual('guess');
    expect(newState[0].message).toEqual('leaf');
  });
  it('should handle SOCKET_CLUE_MESSAGE', () => {
    action.type = SOCKET_CLUE_MESSAGE;
    const newState = messagesReducer([], action);
    expect(Array.isArray(newState)).toBe(true);
    expect(newState.length).toEqual(1);
    expect(newState[0].type).toEqual('clue');
    expect(newState[0].message).toEqual('leaf');
  });
});
