/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findWithType, findWithClass } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React, { TextInput } from 'react-native'; // <rootdir>/app/__mocks__/react-native.js
import EmojiInput from '../EmojiInput.js';

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js
jest.mock('image!emojis');

/* Unmock PlayerInput for unit testing */
jest.unmock('../EmojiKeyboard.js');
import EmojiKeyboard from '../EmojiKeyboard.js';

/* Create mock function to pass in as prop for testing */
const mockOnSend = jest.genMockFunction();

describe('EmojiKeyboard', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<EmojiKeyboard onSend={mockOnSend} />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });

  it('should have an "EmojiInput" component', () => {
    expect(() => { findWithType(output, EmojiInput); }).not.toThrow();
  });

  xit('should have an onSend event', () => {
    const sendButton = findWithClass(output, 'sendButton');
    sendButton.props.onPress({ nativeEvent: {} });
    expect(mockOnSend).toBeCalled();
  });
});
