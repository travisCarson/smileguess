/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';
import { findAllWithType } from 'react-shallow-testutils';

/* Import Mocks for Testing */
import React, { Image } from 'react-native'; // <rootdir>/app/__mocks__/react-native.js

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js
jest.mock('image!emojis');
// require.requireMock('image!emojis', 'StaticImageStub');

/* Unmock PlayerInput for unit testing */
jest.unmock('../Emoji.js');
import Emoji from '../Emoji.js';

describe('Emoji', () => {
  let output;

  beforeEach(() => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Emoji x={5} y={5} />);
    output = renderer.getRenderOutput();
  });

  afterEach(() => {
    output = undefined;
  });

  it('should render', () => {
    expect(output).toBeDefined();
  });

  it('should have an "Image" component', () => {
    expect(() => { findAllWithType(output, Image); }).not.toThrow();
    expect(findAllWithType(output, Image).length > 0).toBeTruthy();
  });
});

