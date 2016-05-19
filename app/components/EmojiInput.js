import React, {
  PropTypes,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import Button from 'react-native-button';
import clearIcon from '../assets/clear_input_icon.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'rgba(150, 150, 150, 0.15)',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  inputBox: {
    flex: 1,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    alignSelf: 'center',
    paddingLeft: 15,
    borderRadius: 4,
  },
  blurContainer: {
    padding: 5,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  send: {
    padding: 5,
  },
  clearIcon: {
    height: 15,
    width: 15,
    alignSelf: 'flex-end',
    margin: 7,
  },
  iconOpacity: {
    alignSelf: 'flex-end',
    height: 30,
    width: 30,
  },
});

/**
 * This is the input box in the EmojiKeyboard component.  You feed it an array of tuples
 * representing the x/y coordinates of the emojis you want to render in the sprite map and
 * it renders them in a little white box.
 * @param {array} emojiElements - an array of tuples representing the x/y coordinates of the emojies to render
 */
const EmojiInput = ({ emojiElements, value, screenSize, onSend }) => {
  return (
    <View
      style={[
        styles.container,
        { width: screenSize.width },
      ]}
    >
      <BlurView
        style={styles.blurContainer}
        blurType="light"
      >
        <View style={styles.inputBox}>
          {emojiElements}
          <TouchableOpacity style={styles.iconOpacity}>
            <Image
              source={clearIcon}
              style={styles.clearIcon}
            />
          </TouchableOpacity>
        </View>
        <Button
          style={styles.send}
          onPress={() => {
            onSend(value);
          }}
        >Send</Button>
      </BlurView>
    </View>
  );
};

EmojiInput.propTypes = {
  emojiElements: PropTypes.array.isRequired,
  screenSize: PropTypes.object.isRequired,
  onSend: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

export default EmojiInput;
