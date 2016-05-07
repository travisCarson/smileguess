jest.unmock('../players.js');
import playerReducer from '../players.js';
import { SOCKET_PLAYER_JOIN_GAME, SOCKET_PLAYER_LEAVE_GAME } from '../../action_types/actionTypes.js';

const myInitialState = {
  someOtherKey: true,
  byId: [1],
  all: { 1: {
    id: 1,
    username: 'bob',
  } },
};

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
    const myAction = { type: SOCKET_PLAYER_JOIN_GAME, player: { id: 3, username: 'jay' } };
    const myNewState = playerReducer(myInitialState, myAction);
    expect(myNewState).not.toBe(myInitialState);
  });
  it('should add the player to the state if given a "SOCKET_PLAYER_JOIN_GAME" action', () => {
    const myAction = { type: SOCKET_PLAYER_JOIN_GAME, player: { id: 2, username: 'joan' } };
    const myNewState = playerReducer(myInitialState, myAction);
    expect(myNewState.all[2].username).toEqual('joan');
  });
  it('should keep existing keys when given an action', () => {
    const myAction = { type: SOCKET_PLAYER_JOIN_GAME, player: { id: 2, username: 'joan' } };
    const myNewState = playerReducer(myInitialState, myAction);
    expect(myNewState.someOtherKey).toBe(true);
  });
  it('should remove the player to the state if given a "SOCKET_PLAYER_LEAVE_GAME" action', () => {
    const myAction = { type: SOCKET_PLAYER_JOIN_GAME, player: { id: 2, username: 'joan' } };
    const myState = playerReducer(myInitialState, myAction);
    const myNewAction = { type: SOCKET_PLAYER_LEAVE_GAME, userid: 2 };
    const myNewState = playerReducer(myState, myNewAction);
    expect(myNewState.all[2]).toBe(undefined);
  });
});

