import TestUtils from 'react-addons-test-utils';
import React from 'react-native';
import { findWithType } from 'react-shallow-testutils';

jest.unmock('react-native-button');
import Button from 'react-native-button';


jest.unmock('../HomeScreen.js');
import HomeScreen from '../HomeScreen.js';

const joinGame = jest.genMockFunction();
// console.log(joinGame);

describe('HomeScreen', () => {
  it('should render', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<HomeScreen onJoinGame={joinGame} />);
    const output = renderer.getRenderOutput();
    expect(output).toBeDefined();
  });

  it('should have a "Join Game" button', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<HomeScreen onJoinGame={joinGame} />);
    const output = renderer.getRenderOutput();
    expect(() => { findWithType(output, Button); }).not.toThrow();
  });

  it('should have an onTouchEnd event', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<HomeScreen onJoinGame={joinGame} />);
    const output = renderer.getRenderOutput();
    const joinButton = findWithType(output, Button);
    joinButton.props.onTouchEnd();
    expect(joinGame).toBeCalled();
  });
});
