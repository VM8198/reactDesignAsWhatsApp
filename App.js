import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import {RkButton, RkText, RkTabSet,RkTabView, RkTab, RkTheme } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Routes from './src/routs';
import ChatScreen from './src/ChatScreen'

class App extends React.Component {

  render() {
    return (        
        
       
         <Routes />
     
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default App;
