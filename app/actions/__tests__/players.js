jest.unmock('../players.js');
import { playerJoinGame } from '../players.js';
import { PLAYER_JOIN_GAME } from '../../action_types/actionTypes.js';


describe('Player Action Types', () => {
  it('should have an action type PLAYER_JOIN_GAME', () => {
    expect(PLAYER_JOIN_GAME).toBeDefined();
    expect(PLAYER_JOIN_GAME).toMatch('PLAYER_JOIN_GAME');
  });
});

const someDude1 = {
  id: 5,
  username: 'joe',
};

describe('playerJoinGame Action Creator', () => {
  it('should be a function', () => {
    expect(typeof playerJoinGame).toEqual('function');
  });
  it('should return an object', () => {
    expect(typeof playerJoinGame(someDude1)).toEqual('object');
  });
  it('should have a type property of PLAYER_JOIN_GAME', () => {
    expect(playerJoinGame(someDude1).type).toEqual(PLAYER_JOIN_GAME);
  });
  it('should have a user with an id property of passed in user', () => {
    expect(playerJoinGame(someDude1).user.id).toEqual(5);
  });
});
