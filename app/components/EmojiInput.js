import React, {
  PropTypes,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
    padding: 5,
    height: 34,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
});

/**
 * This is the input box in the EmojiKeyboard component.  You feed it an array of tuples
 * representing the x/y coordinates of the emojis you want to render in the sprite map and
 * it renders them in a little white box.
 * @param {array} emojiElements - an array of tuples representing the x/y coordinates of the emojies to render
 */
const EmojiInput = ({ emojiElements }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>{emojiElements}</View>
    </View>
  );
};

EmojiInput.propTypes = {
  emojiElements: PropTypes.array.isRequired,
};

export default EmojiInput;

