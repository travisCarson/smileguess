/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React, { Text } from 'react-native'; // <rootdir>/app/__mocks__/react-native.js

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js
jest.mock('image!emojis');

/* Unmock PlayerInput for unit testing */
jest.unmock('../EmojiInput.js');
import EmojiInput from '../EmojiInput.js';

/* Create mock function to pass in as prop for testing */

describe('PlayerInput', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<EmojiInput emojiElements={[<Text key={0}>Something</Text>]} />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });

  it('should have a "Text" component', () => {
    expect(() => { findWithType(output, Text); }).not.toThrow();
  });
});
