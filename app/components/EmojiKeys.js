/* Import Components */
import React, {
  PropTypes,
  View,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Emoji from './Emoji.js';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 255,
    width: width - 10,
    justifyContent: 'flex-start',
    backgroundColor: '#c4c4c4',
  },
  scrollContainer: { // ContentContainerStyle
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  touchable: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 0,
    overflow: 'hidden',
  },
  emojiButtonView: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#AAAAAA',
    borderRadius: 5,
    width: 38,
    height: 38,
    backgroundColor: '#ffffff',
    margin: 2,
    padding: 2,
  },
});

/**
 * This component creates the array of emoji keys that are pressable on the keyboard.  NOTE: this component does not re-render.
 * @param {function} updateInput - this is the function passed down from the EmojiKeyboard component which is used to pass the input to the EmojiInput component
 * @param {array} emojiData - this is an array of objects which represent each emoji.  The essential part is that it have a `sheet_x` and `sheet_y` property to represent the emoji's x/y coordinate on the spritemap
 */
class EmojiKeys extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (<View style={styles.container}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {this.props.emojiData.map((emoji, emojiIndex) => (
          <View key={emojiIndex} style={styles.emojiButtonView}>
            <TouchableHighlight
              className="emojiButton"
              style={styles.touchable}
              onPress={() => this.props.updateInput([emoji.sheet_x, emoji.sheet_y])}
            >
              <View><Emoji x={emoji.sheet_x} y={emoji.sheet_y} /></View>
            </TouchableHighlight>
          </View>))
        }
      </ScrollView>
    </View>);
  }
}

EmojiKeys.propTypes = {
  updateInput: PropTypes.func.isRequired,
  emojiData: PropTypes.array.isRequired,
};

export default EmojiKeys;
