import React, {
  View,
  StyleSheet,
  Text,
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

const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button style={styles.button}> Join Random Game! </Button>
    </View>
  </View>
);


export default HomeScreen;
