/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  message: {
    margin: 10,
    padding: 15,
    borderRadius: 4,
  },
  guessText: {
    color: 'white',
  },
  clueTest: {
    color: '#555555',
  },
  dealerMessage: {
    backgroundColor: '#FFFCE9',
    marginLeft: 30,
    alignSelf: 'flex-start',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#A2C2EB',
    marginRight: 30,
  },
  opponentMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#8E79A8',
    marginLeft: 30,

  },
});

/**
 * Message is a React functional component.
 * It renders a single message with useful metadata.
 * @param {Object} props - props for this component is a message object.
 * @param {string} props.type - specifies if message is a clue or a guess.
 * @param {number} props.userid - identifies the user who sent the message.
 * @param {string} props.timestamp - UTC timestmap for displaying when message
 * was sent.
 * @param {string} props.message - text body of the message.
 */
const Message = ({ type, userid, timestamp, message }) => (
  <View
    style={[
      styles.message,
      type === 'guess' && userid === 6 && styles.userMessage,
      type === 'guess' && userid !== 6 && styles.opponentMessage,
      type === 'clue' && userid !== 6 && styles.dealerMessage,
    ]}
  >
    <Text
      style={[
        type === 'guess' && styles.guessText,
        type === 'clue' && styles.clueText,
      ]}
    >
    {message}
    </Text>
  </View>
);

Message.propTypes = {
  type: PropTypes.string.isRequired,
  userid: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
