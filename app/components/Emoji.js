import React, {
  PropTypes,
  View,
  Image,
} from 'react-native';

/**
 * This is a basic emoji component.  It renders an image of an emoji based on the spritemap in the
 * 'image!emojis' static resource and the x/y coordinates you provide to the component.
 * @param {number} x - the x coordinate of the emoji that you want to render in the spritemap
 * @param {number} y - the y coordinate of the emoji that you want to render in the spritemap
 */
const Emoji = ({ x, y }) => (<View
    style={{
      width: 32,
      height: 32,
      overflow: 'hidden',
    }}
  >
  <Image
    source={require('image!emojis')}
    style={{
      left: -32 * x,
      top: -32 * y,
    }}
  />
  </View>);

Emoji.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Emoji;
