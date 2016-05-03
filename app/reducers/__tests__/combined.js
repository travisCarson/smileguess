jest.unmock('../index.js');
import reducer from '../index.js';

describe('Combined Reducer', () => {
  it('should be a function', () => {
    expect(reducer).not.toBeUndefined();
    expect(typeof reducer).toBe('function');
  });
});

