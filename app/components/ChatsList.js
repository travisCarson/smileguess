/* Import Components */
import React, {
  ListView,
  StyleSheet,
  PropTypes,
  View,
  Text,
  Dimensions,
  DeviceEventEmitter,
  LayoutAnimation,
} from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    // backgroundColor: '#e5e5e5',
    padding: 5,
  },
  contentContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
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

const renderRow = function renderRow(rowData = {}) {
  return (
    <View
      style={[
        styles.message,
        rowData.type === 'guess' && rowData.userid === 6 && styles.userMessage,
        rowData.type === 'guess' && rowData.userid !== 6 && styles.opponentMessage,
        rowData.type === 'clue' && rowData.userid !== 6 && styles.dealerMessage,
      ]}
    >
      <Text
        style={[
          rowData.type === 'guess' && styles.guessText,
          rowData.type === 'clue' && styles.clueText,
        ]}
      >
        {rowData.message}
      </Text>
    </View>
  );
};

class ChatsList extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (oldRow, newRow) => oldRow !== newRow });

    this.state = {
      screenHeight,
      screenWidth,
      visibleHeight: screenHeight,
      visibleWidth: screenWidth,
      dataSource: ds.cloneWithRows(this.props.messages),
    };

    console.log(this.state.visibleHeight);
  }

  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({ rowHasChanged: (oldRow, newRow) => oldRow !== newRow });
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.messages),
    });
  }
  render() {
    const localStyles = StyleSheet.create({
      container: {
        height: this.state.visibleHeight,
      },
    });
    return (
      <ListView
        style={[localStyles.container, styles.container]}
        renderRow={renderRow}
        dataSource={this.state.dataSource}
        contentContainerStyle={[styles.contentContainer]}
        keyboardDismissMode="interactive"
        renderFooter={this.props.renderFooter}
        removeClippedSubviews={false}
      />
    );
  }
}

ChatsList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatsList;
