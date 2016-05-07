
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

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    // height: screenHeight,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'green',
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
  componentDidMount() {
    const { onKeyboardEnter } = this.props;
    DeviceEventEmitter.addListener('keyboardWillShow', (e) => {
      // console.log(e);
      onKeyboardEnter({ keyboardHeight: e.endCoordinates.height })
    });
    DeviceEventEmitter.addListener('keyboardWillHide', (e) => {
      console.log(e);
      LayoutAnimation.configureNext({
        duration: 200,
        create: {
          type: LayoutAnimation.Types.linear,
        },
        update: {
          type: LayoutAnimation.Types.curveEaseInEaseOut,
        },
      });
      onKeyboardEnter({ keyboardHeight: 0 })
    });
    DeviceEventEmitter.addListener('keyboardWillChangeFrame', (e) => {
      console.log('Keyboard Changing Frame: ',e);
    });
  }
  render() {
    const { onSubmitGuess, visibleHeight } = this.props;
    const localStyles = StyleSheet.create({
      contentContainer: {
        height: visibleHeight,
      },
    });

    console.log(visibleHeight);
    return (
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={[localStyles.contentContainer, styles.contentContainer]}
        keyboardDismissMode="interactive"
      >
        <View style={styles.item}>
          <PlayerInput onSubmitEditing={onSubmitGuess} />
        </View>
      </ScrollView>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

GameScreen.propTypes = {
  onSubmitGuess: PropTypes.func.isRequired,
  onKeyboardEnter: PropTypes.func.isRequired,
  visibleHeight: PropTypes.number.isRequired,
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
