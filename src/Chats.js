import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {RkButton, RkText, RkTabSet, RkTab, RkBadge } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialIcons';


class Chats extends React.Component {
  render() {
    return (
     <View style = {styles.mainContainer}>
     
     <TouchableOpacity>
     <View style = {styles.singleList}>  
       <Image style = {styles.image} source={require('../assets/icon.png')} />
       <View style = {{flexDirection: 'column'}}>
         <Text style = {styles.name}>Name</Text>
         <Text style = {styles.description}>Description</Text>
         <View style = {styles.line}></View>
       </View>
      </View>
      </TouchableOpacity>

      <View style = {{marginTop: 12}} ></View>
      <TouchableOpacity>
     <View style = {styles.singleList}>  
       <Image style = {styles.image} source={require('../assets/icon.png')} />
       <View style = {{flexDirection: 'column'}}>
         <Text style = {styles.name}>Name</Text>
         <Text style = {styles.description}>Description</Text>
         <View style = {styles.line}></View>
       </View>
      </View>
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
  },
  mainContainer:{
    padding: 15,
  },
  singleList:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  name:{
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 20
  },
  line:{
    height: 1,
    width: 250,
    backgroundColor: 'lightgrey',
    marginTop: 20,
    marginLeft: 8
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
export default Chats;
 