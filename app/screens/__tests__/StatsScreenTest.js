/* Import Test Utils */
import TestUtils from 'react-addons-test-utils';

/* Import Mocks for Testing */
import React from 'react-native'; // <rootdir>/app/__mocks__/react-native.js

/* Must be mocked explicitly because set as an unmocked module in package.json */
jest.mock('react-redux'); // <rootdir>/app/__mocks__/react-redux.js

/* Unmock StasScreen for unit testing */
jest.unmock('../StatsScreen.js');
import StatsScreen from '../StatsScreen.js';

describe('StatsView', () => {
  let statsView;

  const renderScreen = (props, states) => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<StatsScreen { ...props || {} } />);
    const instance = renderer._instance._instance;
    instance.setState(states || {});
    const output = renderer.getRenderOutput();

    return {
      output,
      instance,
    };
  };

  it('should display the list view', () => {
    const states = { dataSource: { test: 'test' } };
    statsView = renderScreen({}, states);
    const { output } = statsView;
    expect(output.type.name).toBe('ListView');
    expect(output.props.dataSource).toEqual(states.dataSource);
  });
});

