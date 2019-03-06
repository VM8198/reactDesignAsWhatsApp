import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {RkButton, RkText, RkTabSet, RkTab, RkBadge } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialIcons';


class Status extends React.Component {
  render() {
    return (
     <View style = {styles.mainContainer}>
     <TouchableOpacity>
     <View style = {styles.singleList}>  
        <Image style = {styles.image} source={require('../assets/download.jpeg')}/>
       <View style = {{flexDirection: 'column'}}>
         <Text style = {styles.name}>My Status</Text>
         <Text style = {styles.description}>Tap to add status update</Text>
        
       </View>
      </View>
      </TouchableOpacity>
       <View style = {styles.statusLine}></View>
       <View style = {{backgroundColor: 'light-grey', marginTop: 10}}>
         <RkText>Recent Updates</RkText>
       </View>
       <TouchableOpacity>
     <View style = {styles.singleList}>  
        <Image style = {styles.image} source={require('../assets/download.jpeg')}/>
       <View style = {{flexDirection: 'column'}}>
         <Text style = {styles.name}>Name</Text>
         <Text style = {styles.description}>Description</Text>
         <View style = {styles.line}></View>
       </View>
      </View>
      </TouchableOpacity>

      <View style = {styles.twoButtons}>
      <TouchableOpacity>
        <Image style = {styles.addImage} source={require('../assets/icon.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style = {styles.writeImage} source={require('../assets/icon.png')} />
      </TouchableOpacity>      
      </View>
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
  },
  mainContainer:{
    padding: 15,
  },
  singleList:{
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    marginTop: 10
  },
  twoButtonsView:{
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  addImage:{
    borderRadius: 100,
    height: 70,
    width: 70,   
    marginLeft: 260,
    marginTop: 50
  },
  writeImage:{
    borderRadius: 100,
    height: 70,
    width: 70,   
    marginLeft: 260,
    marginTop: 5
  },
  
  name:{
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 16
  },
  line:{
    height: 1,
    width: 250,
    backgroundColor: 'lightgrey',
    marginTop: 20,
    marginLeft: 8
  },
  statusLine:{
    padding: 0,
    height: 1,
    width: 330,
    backgroundColor: 'lightgrey',
    marginTop: 20,
  },
  description:{
    marginLeft: 8,
    fontSize: 15
  },
  image:{
    borderRadius: 100,
    height: 70,
    width: 70
  }
});
export default Status;
