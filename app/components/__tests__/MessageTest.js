/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React, { Text } from 'react-native'; // <rootdir>/app/__mocks__/react-native.js

/* Setup Test Data */
const fakeMessage = {
  userid: 1,
  type: 'guess',
  message: 'I dont know.',
};


/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js

/* Unmock Message for unit testing */
jest.unmock('../Message.js');
import Message from '../Message.js';

describe('Message', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Message
      type={fakeMessage.type}
      message={fakeMessage.message}
      userid={fakeMessage.userid}
    />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });

  it('should have a Text component', () => {
    expect(() => { findWithType(output, Text); }).not.toThrow();
  });
});
