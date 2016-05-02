jest.unmock('../user.js');
import { JOIN_GAME, SUBMIT_GUESS, joinGame } from '../user.js';

describe('User Action Types', () => {
  it('should have an action type JOIN_GAME', () => {
    expect(JOIN_GAME).toBeDefined();
    expect(JOIN_GAME).toMatch('JOIN_GAME');
  });
  it('should have an action type SUBMIT_GUESS', () => {
    expect(SUBMIT_GUESS).toBeDefined();
    expect(SUBMIT_GUESS).toMatch('SUBMIT_GUESS');
  });
});

describe('joinGame Action Creator', () => {
  it('should be a function', () => {
    expect(typeof joinGame).toEqual('function');
  });
  it('should return an object', () => {
    expect(typeof joinGame(6)).toEqual('object');
  });
  it('should have a type property of JOIN_GAME', () => {
    expect(joinGame(6).type).toEqual(JOIN_GAME);
  });
});

