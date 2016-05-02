jest.unmock('../gameMaster.js');
import { SUBMIT_HINT, submitHint } from '../gameMaster.js';

describe('User Action Types', () => {
  it('should have an action type SUBMIT_HINT', () => {
    expect(SUBMIT_HINT).toBeDefined();
    expect(SUBMIT_HINT).toMatch('SUBMIT_HINT');
  });
});

describe('submitHint Action Creator', () => {
  it('should be a function', () => {
    expect(typeof submitHint).toEqual('function');
  });
  it('should return an object', () => {
    expect(typeof submitHint('leaf')).toEqual('object');
  });
  it('should have a type property of SUBMIT_HINT', () => {
    expect(submitHint('leaf').type).toEqual(SUBMIT_HINT);
  });
  it('should have a hint property of passed in hint', () => {
    expect(submitHint('leaf').hint).toEqual('leaf');
  });
});
