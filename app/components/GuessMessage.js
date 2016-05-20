/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
  Text,
  Image,
  Animated,
  Easing,
} from 'react-native';

import { colors } from '../styles/colors.js';

const styles = StyleSheet.create({
  row: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',
  },
  userContainer: {
    alignSelf: 'flex-end',
  },
  opponentContainer: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    padding: 15,
    borderRadius: 4,
  },
  messageMeta: {
  },
  messageMetaFont: {
    color: 'grey',
  },
  guessText: {
    color: 'white',
  },
  userBubble: {
    backgroundColor: '#A2C2EB',
  },
  opponentBubble: {
    backgroundColor: '#8E79A8',
  },
  thumbnail: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    marginBottom: 5,
    marginRight: 5,
  },
});

/**
 * Message is a React functional component.
 * It renders a single message with useful metadata.
 * @param {Object} props - props for this component is a message object.
 * @param {string} props.type - specifies if message is a clue or a guess.
 * @param {number} props.userId - identifies the user who sent the message.
 * @param {string} props.time - UTC timestmap for displaying when message
 * was sent.
 * @param {string} props.body - text body of the message.
 */
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    if (this.props.correct) {
      Animated.timing(
        this.state.colorAnim,
        {
          toValue: 1,
          duration: 400,
          easing: Easing.inOut(Easing.quad),
        },
      ).start();
    }
  }
  render() {
    const { userId, time, body, currentUser, players, screenSize } = this.props;
    const localStyles = StyleSheet.create({
      row: {
        width: screenSize.width,
      }
    });
    return (
      <View style={[styles.row, localStyles.row]} >
        <View
          style={[
            styles.container,
            userId === currentUser.id && styles.userContainer,
            userId !== currentUser.id && styles.opponentContainer,
          ]}
        >
          <Image
            style={styles.thumbnail}
            source={{ uri: players.all[userId].picture }}
          />
          <View>
            <View style={styles.messageMeta} >
              <Text style={styles.messageMetaFont}>
              {userId === currentUser.id ? 'me' : players.all[userId].username}
              </Text>
            </View>
            <Animated.View
              style={{
                padding: 15,
                borderRadius: 4,
                backgroundColor:
                  this.state.colorAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [userId === currentUser.id ? '#A2C2EB' : '#8E79A8', '#1bc444'],
                  }),
              }}
            >
              <Text style={styles.guessText} >
                {body}
              </Text>
            </Animated.View>
          </View>
        </View>
      </View>
    );
  }
}
Message.propTypes = {
  type: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  screenSize: PropTypes.object.isRequired,
  correct: PropTypes.bool.isRequired,
};

export default Message;
