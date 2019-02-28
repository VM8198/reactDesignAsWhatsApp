import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {RkButton, RkText, RkTabSet, RkTab, RkBadge } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialIcons';


class Calls extends React.Component {
  render() {
    return (
          
     <View style={{flex: 1}}>
     <View style={styles.container}>
       
     <RkText>Tap to Call</RkText>
     </View>
     <TouchableOpacity>
        <Image style = {styles.addImage} source={require('../assets/icon.png')} />
     </TouchableOpacity>
      
     </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    alignItems: 'flex-end'
  },
  
});
export default Calls;
