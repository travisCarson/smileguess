/**
 * # __mockes__/react-native.js
 *
 * This class stubs out the React-Native classes with React classes
 */
'use strict';
/**
 * ## Imports
 *
 * ReactNative is actually React
 */
const React = require('react');
const ReactNative = React;

/**
 * ## These need additional mocking
 *
 * ReactNative is actually React
 */
ReactNative.StyleSheet = {
  create: function create(styles) {
    return styles;
  },
};
class View extends React.Component {
  render() { return false; }
}

View.propTypes = {
  style: React.PropTypes.object,
};

class TextInput extends React.Component {
  render() { return false; }
}

TextInput.propTypes = {
  style: React.PropTypes.object,
};

class PixelRatio extends React.Component {
  static get() { return 1; }
}

class Dimensions {
  get() {
    return { height: 568, width: 320 };
  }
}
/**
 * ## Stubs
 *
 * Simple replacements for testing
 */
ReactNative.View = View;
ReactNative.ScrollView = View;
ReactNative.Text = View;
ReactNative.TouchableOpacity = View;
ReactNative.TouchableHighlight = View;
ReactNative.TouchableWithoutFeedback = View;
ReactNative.ToolbarAndroid = View;
ReactNative.Image = View;
ReactNative.TextInput = TextInput;
ReactNative.PixelRatio = PixelRatio;
ReactNative.NativeModules = {};
ReactNative.Dimensions = new Dimensions();

ReactNative.Platform = {};
module.exports = ReactNative;
