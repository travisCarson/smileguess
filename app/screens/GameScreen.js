// THIS IS A DUMMY FILE CREATED OFF HOMESCREEN USED FOR TESTING NAVIGATIONS

/* Import Dependencies */
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

/* Import Provider */
import { mapHomeScreen } from '../providers/providers.js';

/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
} from 'react-native';
import Button from 'react-native-button';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    flex: 0,
  },
});

const GameScreen = ({ onJoinGame }) => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button onPress={onJoinGame}> Don't join Random Game! </Button>
    </View>
  </View>
);

GameScreen.propTypes = {
  onJoinGame: PropTypes.func.isRequired,
};

const GameScreenContainer = connect(
  mapHomeScreen.mapStateToProps,
  mapHomeScreen.mapDispatchToProps
)(GameScreen);

export default GameScreenContainer;
