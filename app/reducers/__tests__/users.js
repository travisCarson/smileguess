jest.unmock('../users.js');
import userReducer from '../users.js';

const myInitialState = { users: [] };

describe('Users Reducer', () => {
  it('should be a function', () => {
    expect(userReducer).not.toBeUndefined();
    expect(typeof userReducer).toBe('function');
  });
  it('should return an object', () => {
    expect(typeof userReducer()).toBe('object');
  });
  it('should default to returning same object if not passed an action', () => {
    const myNewState = userReducer(myInitialState);
    expect(myNewState).toBe(myInitialState);
  });
  it('should not mutate its inputs if given an action', () => {
    const myAction = { type: 'JOIN_GAME', userid: 3 };
    const myNewState = userReducer(myInitialState, myAction);
    expect(myNewState).not.toBe(myInitialState);
  });
  it('should add the userid to the "users" array if given a "JOIN_GAME" action', () => {
    const myAction = { type: 'JOIN_GAME', userid: 2 };
    const myNewState = userReducer(myInitialState, myAction);
    expect(myNewState).toEqual({ users: [2] });
  });
});
