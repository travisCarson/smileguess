jest.unmock('../dealer.js');
import { submitClue } from '../dealer.js';
import { SEND_CLUE_MESSAGE } from '../../action_types/actionTypes.js';


describe('User Action Types', () => {
  it('should have an action type SEND_CLUE_MESSAGE', () => {
    expect(SEND_CLUE_MESSAGE).toBeDefined();
    expect(SEND_CLUE_MESSAGE).toMatch('server/sendClueMessage');
  });
});

describe('submitClue Action Creator', () => {
  it('should be a function', () => {
    expect(typeof submitClue).toEqual('function');
  });
  it('should return an object', () => {
    expect(typeof submitClue(6, 'leaf')).toEqual('object');
  });
  it('should have a type property of SEND_CLUE_MESSAGE', () => {
    expect(submitClue(6, 'leaf').type).toEqual(SEND_CLUE_MESSAGE);
  });
  it('should have a hint property of passed in hint', () => {
    expect(submitClue(6, 'leaf').message).toEqual('leaf');
  });
});
