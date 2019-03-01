import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {RkButton, RkText, RkTabSet, RkTab, RkBadge, RkGalleryImage, RkCard } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lightbox from 'react-native-lightbox'
import { Actions } from 'react-native-router-flux';



class Chats extends React.Component { 

long(){
 
console.log("long");

return(

  <RkCard style = {styles.container}>
  <View rkCardHeader>
  <Text>Header</Text>
  </View>
  <Image rkCardImg source={require('../assets/download.jpeg')}/>
  <View rkCardContent>
  <Text> quick brown fox jumps over the lazy dog</Text>
  </View>
  <View rkCardFooter>
  <Text>Footer</Text>
  </View>
  </RkCard>

  
  )
 }


  render() {

    return (
 
     <View style = {styles.mainContainer}>     
       <View style = {styles.singleList}>  
        <RkGalleryImage style = {styles.image} source={require('../assets/download.jpeg')}/>
         <View style = {{flexDirection: 'column'}}>
          <TouchableOpacity onPress={() => Actions.chatScreen()}>
          <View style = {{flexDirection: 'row', alignItems: 'space-around'} }>
            <View style = {{flexDirection: 'column'}}>
             <RkText style = {styles.name}>Name</RkText>
             <RkText style = {styles.description}>Description</RkText>
            </View>
            
            <View style = {{flexDirection: 'column'}}>
              <RkText style = {styles.time}>5:46 AM</RkText>
              <View style = {styles.round}>
                <RkText style = {styles.roundText}>5</RkText>
              </View>
            </View>
          </View>
          </TouchableOpacity>
           <View style = {styles.line}></View>
         </View>
        </View>

      <View style = {{marginTop: 12}} ></View>
      <TouchableOpacity>
     <View style = {styles.singleList}>  
        <RkGalleryImage style = {styles.image} source={require('../assets/icon.png')}/>
         <View style = {{flexDirection: 'column'}}>

          <TouchableOpacity onPress={() => Actions.chatScreen()}>
          <View style = {{flexDirection: 'row', alignItems: 'space-around'} }>
            <View style = {{flexDirection: 'column'}}>
             <RkText style = {styles.name}>Name</RkText>
             <RkText style = {styles.description}>Description</RkText>
            </View>
            
            <View style = {{flexDirection: 'column'}}>
              <RkText style = {styles.time}>5:46 AM</RkText>
              <View style = {styles.round}>
                <RkText style = {styles.roundText}>5</RkText>
              </View>
            </View>
          </View>
          </TouchableOpacity>
           <View style = {styles.line}></View>
         </View>
        </View>
      </TouchableOpacity>

      <View style = {{marginTop: 12}} ></View>
      <TouchableOpacity>
     <View style = {styles.singleList}>  
        <RkGalleryImage style = {styles.image} source={require('../assets/icon.png')}/>
         <View style = {{flexDirection: 'column'}}>

          <TouchableOpacity onLongPress={() => {this.long()}}>
          <View style = {{flexDirection: 'row', alignItems: 'space-around'} }>
            <View style = {{flexDirection: 'column'}}>
             <RkText style = {styles.name}>Name</RkText>
             <RkText style = {styles.description}>Description</RkText>
            </View>
            
            <View style = {{flexDirection: 'column'}}>
              <RkText style = {styles.time}>5:46 AM</RkText>
              <View style = {styles.round}>
                <RkText style = {styles.roundText}>5</RkText>
              </View>
            </View>
          </View>
          </TouchableOpacity>
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
  time:{
    marginLeft: 100,
    // fontWeight: 'bold',
    fontSize: 16,
    color: '#25D366'
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
  },
  round:{
    backgroundColor: '#25D366',
    borderRadius: 500,
    height: 20,
    width: 20,
    alignItems: 'center',
    marginLeft: 140

  },
  roundText: {
    fontSize: 14,
    alignItems: 'center',
    color: '#fff',

  },
 
});
export default Chats;
 