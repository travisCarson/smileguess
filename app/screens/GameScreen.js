
// /* Import Dependencies */
import { connect } from 'react-redux';

/* Import Provider */
import { mapGameScreen } from '../providers/providers.js';

/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
  Dimensions,
} from 'react-native';
import PlayerInput from '../components/PlayerInput.js';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'green',
    width: screenWidth,
  },
});


/**
 * GameScreen is a React functional component.
 * It defines the game room players will see while playing the game.
 * It displays messages as well as allows for user input form either the dealer
 * or the players who are guessing.
 * @param {{onSubmitGuess: function()}} props for GameScreen.
 */
export const GameScreen = ({ onSubmitGuess }) => (
  <View style={styles.container}>
    <View style={styles.item}>
      <PlayerInput onSubmitEditing={onSubmitGuess} />
    </View>
  </View>
);

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
