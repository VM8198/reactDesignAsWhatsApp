import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Picker, ToolbarAndroid } from 'react-native';
import { RkButton, RkText, RkTabSet, RkTab, RkBadge } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialIcons';


class Calls extends React.Component {
  state = {
    language: ''
  }
  onActionSelected(position) {
  if (position === 0) { // index of 'Settings'
    showSettings();
  }
}
  render() {

    return (
          
   <ToolbarAndroid
      logo={require('../assets/audio.png')}
      title="AwesomeApp"
      actions={[{title: 'Settings', icon: require('../assets/audio.png'), show: 'always'}]}
      onActionSelected={this.onActionSelected} />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200
  },
  addImage:{
    borderRadius: 100,
    height: 70,
    width: 70,   
    marginLeft: 260,
    marginTop: 90,
    alignItems: 'flex-end',
    elevation: 3,
    backgroundColor: '#fff'
  },  
});
export default Calls;
