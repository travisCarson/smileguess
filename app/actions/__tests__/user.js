jest.unmock('../user.js');
import { joinGame, joinRandomGame, submitGuess } from '../user.js';
import { JOIN_RANDOM_GAME, JOIN_GAME, SEND_GUESS_MESSAGE } from '../../action_types/actionTypes.js';

describe('User Action Types', () => {
  it('should have an action type JOIN_GAME', () => {
    expect(JOIN_GAME).toBeDefined();
    expect(JOIN_GAME).toMatch('server/joinGame');
  });
  it('should have an action type JOIN_RANDOM_GAME', () => {
    expect(JOIN_RANDOM_GAME).toBeDefined();
    expect(JOIN_RANDOM_GAME).toMatch('server/joinRandomGame');
  });
  it('should have an action type SEND_GUESS_MESSAGE', () => {
    expect(SEND_GUESS_MESSAGE).toBeDefined();
    expect(SEND_GUESS_MESSAGE).toMatch('server/sendGuessMessage');
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

describe('joinRandomGame Action Creator', () => {
  it('should be a function', () => {
    expect(typeof joinRandomGame).toEqual('function');
  });
  it('should return an object', () => {
    expect(typeof joinRandomGame()).toEqual('object');
  });
  it('should have a type property of JOIN_GAME', () => {
    expect(joinRandomGame().type).toEqual(JOIN_RANDOM_GAME);
  });
});

describe('submitGuess Action Creator', () => {
  it('should be a function', () => {
    expect(typeof submitGuess).toEqual('function');
  });
  it('should return an object', () => {
    expect(typeof submitGuess(6, 'tree')).toEqual('object');
  });
  it('should have a type property of SUBMIT_GUESS', () => {
    expect(submitGuess(6, 'tree').type).toEqual(SEND_GUESS_MESSAGE);
  });
  it('should have a guess property of passed in guess', () => {
    expect(submitGuess(6, 'tree').message).toEqual('tree');
  });
});
