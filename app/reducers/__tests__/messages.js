jest.unmock('../messages.js');
import messagesReducer from '../messages.js';
import { SUBMIT_GUESS } from '../../actions/user.js';
import { SUBMIT_HINT } from '../../actions/dealer.js';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    expect(
      messagesReducer(undefined, {})
    ).toEqual([]);
  });
  it('should handle SUBMIT_GUESS', () => {
    expect(
      messagesReducer([], {
        type: SUBMIT_GUESS, guess: 'leaf' })
      ).toEqual(['leaf']);
  });
  it('should handle SUBMIT_HINT', () => {
    expect(
      messagesReducer([], {
        type: SUBMIT_HINT, hint: 'tree' })
      ).toEqual(['tree']);
  });
});
