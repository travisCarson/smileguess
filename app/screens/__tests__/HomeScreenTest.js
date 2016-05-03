/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React from 'react-native'; // <rootdir>/app/__mocks__/react-native.js
import Button from 'react-native-button'; // Mocked automatically

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js

/* Unmock HomeScreen for unit testing */
jest.unmock('../HomeScreen.js');
import HomeScreen from '../HomeScreen.js';

/* Create mock function to pass in as prop for testing */
const joinGame = jest.genMockFunction();

describe('HomeScreen', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<HomeScreen onJoinGame={joinGame} />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });

  it('should have a "Join Game" button', () => {
    expect(() => { findWithType(output, Button); }).not.toThrow();
  });

  it('should have an onTouchEnd event', () => {
    const joinButton = findWithType(output, Button);
    joinButton.props.onTouchEnd();
    expect(joinGame).toBeCalled();
  });
});
