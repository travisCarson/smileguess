jest.unmock('../players.js');
import playerReducer from '../players.js';
import { SOCKET_PLAYER_JOIN_GAME } from '../../action_types/actionTypes.js';

const myInitialState = { 1: {
  username: 'bob',
} };

describe('Players Reducer', () => {
  it('should be a function', () => {
    expect(playerReducer).not.toBeUndefined();
    expect(typeof playerReducer).toBe('function');
  });
  it('should return an object', () => {
    expect(typeof playerReducer()).toBe('object');
  });
  it('should default to returning same object if not passed an action', () => {
    const myNewState = playerReducer(myInitialState);
    expect(myNewState).toBe(myInitialState);
  });
  it('should not mutate its inputs if given an action', () => {
    const myAction = { type: SOCKET_PLAYER_JOIN_GAME, user: { id: 3, username: 'jay' } };
    const myNewState = playerReducer(myInitialState, myAction);
    expect(myNewState).not.toBe(myInitialState);
  });
  it('should add the userid to the state if given a "SOCKET_PLAYER_JOIN_GAME" action', () => {
    const myAction = { type: SOCKET_PLAYER_JOIN_GAME, user: { id: 2, username: 'joan' } };
    const myNewState = playerReducer(myInitialState, myAction);
    expect(myNewState[2].username).toEqual('joan');
  });
});

