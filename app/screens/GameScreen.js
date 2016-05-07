
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
    DeviceEventEmitter.addListener('keyboardWillShow', (e) => {
      LayoutAnimation.configureNext({
        duration: 250,
        update: {
          type: LayoutAnimation.Types.keyboard,
        },
      });
      this.setState({ visibleHeight: this.state.screenHeight - e.endCoordinates.height });
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
  render() {
    const { onSubmitGuess } = this.props;
    const localStyles = StyleSheet.create({
      contentContainer: {
        height: this.state.visibleHeight,
      },
    });

    // console.log(visibleHeight);
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
