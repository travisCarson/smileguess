/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#c4c4c4',
    padding: 5,
  },
});

const ChatsList = ({ onSubmitEditing }) => (
  <View style={styles.container}>
  </View>
);

ChatsList.propTypes = {
};

export default ChatsList;
