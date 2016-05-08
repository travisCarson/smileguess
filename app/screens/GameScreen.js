
// /* Import Dependencies */
import { connect } from 'react-redux';

/* Import Provider */
import { mapGameScreen } from '../providers/providers.js';

/* Import Components */
import React, {
  View,
  ScrollView,
  StyleSheet,
  PropTypes,
  Dimensions,
  DeviceEventEmitter,
  LayoutAnimation,
} from 'react-native';
import PlayerInput from '../components/PlayerInput.js';
import ChatsList from '../components/ChatsList.js';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  chatContainer: {
    flexDirection: 'row',
    width: screenWidth,
  },
  chats: {
    width: screenWidth,
  },
});

/* eslint-disable react/prefer-stateless-function */
/**
 * GameScreen is a React class component.
 * It defines the game room players will see while playing the game.
 * It displays messages as well as allows for user input form either the dealer
 * or the players who are guessing.
 * @param {{onSubmitGuess: function()}} props for GameScreen.
 */
export class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight,
      screenWidth,
      visibleHeight: screenHeight,
      visibleWidth: screenWidth,
    };
  }
  componentDidMount() {
    console.log(this.state.visibleHeight);
    DeviceEventEmitter.addListener('keyboardWillShow', (e) => {
      LayoutAnimation.configureNext({
        duration: 250,
        update: {
          type: LayoutAnimation.Types.keyboard,
        },
      });
      this.setState({ visibleHeight: this.state.screenHeight - e.endCoordinates.height });
      console.log(e, ' ', this.state.visibleHeight);
    });

    DeviceEventEmitter.addListener('keyboardWillHide', () => {
      LayoutAnimation.configureNext({
        duration: 250,
        update: {
          type: LayoutAnimation.Types.keyboard,
        },
      });
      this.setState({ visibleHeight: this.state.screenHeight });
    });
  }
  renderFooter() {
    const { onSubmitGuess } = this.props;
    return (
      <View style={styles.chatContainer}>
        <PlayerInput onSubmitEditing={onSubmitGuess} />
      </View>
    );
  }
  render() {
    const { messages, onSubmitGuess } = this.props;
    const localStyles = StyleSheet.create({
      container: {
        height: this.state.visibleHeight,
      },
    });
    // console.log(visibleHeight);
    return (
      <View
        style={[styles.container, localStyles.container]}
      >
        <ChatsList
          style={styles.chats}
          messages={messages}
        />
        <View>
          <PlayerInput onSubmitEditing={onSubmitGuess} />
        </View>
      </View>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

GameScreen.propTypes = {
  onSubmitGuess: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
};

/**
 * GameScreenContainer is a 'container component' which binds the props and
 * actions creators of GameScreen to the store and dispatcher, respectively.
 * It should be imported in favor of HomeScreen, which is exported only
 * for documentation purposes.
 */
const GameScreenContainer = connect(
  mapGameScreen.mapStateToProps,
  mapGameScreen.mapDispatchToProps
)(GameScreen);

export default GameScreenContainer;
