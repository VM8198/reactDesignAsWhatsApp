import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import {RkButton, RkText, RkTabSet,RkTabView, RkTab, RkTheme, RkTextInput } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import OpenCamera from './camera';
// import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';




 RkTheme.setType('RkTabView', 'dark', {
  backgroundColor:'#075E54',
  color:'white',
  fontWeight: 'bold',
  borderColor:'#075E54',
  fontSize: 50,
});

 RkTheme.setType('RkTabView', 'darkSelected', {
  backgroundColor:'#075E54',
  borderColor:'#075E54',
  fontWeight: 'bold',
  fontSize: 50
});

RkTheme.setType('RkTextInput', 'frame', {
  input: {
    backgroundColor: 'grey',
    marginLeft: 0,
    marginHorizontal: 0,
    borderRadius: 5,
    // marginBottom:10
  },
  
});


class ChatScreen extends React.Component {

  
openCamera(){
 Actions.camera();
}

openAttachment(){
  console.log("Attach");
  // DocumentPicker.show({
  //     filetype: [DocumentPickerUtil.images()],
  //   },(error,res) => {
  //     // Android
  //     console.log(
  //        res.uri,
  //        res.type, // mime type
  //        res.fileName,
  //        res.fileSize
  //     );
  //   });
}
  render() {
    return (
    <View style = {{flex: 1}}>
      <View>
          <View style = {styles.top}>
          <TouchableOpacity  style = {styles.topArrow} onPress = {()=>Actions.main()}>
            <Icon name = "arrow-back" color='#fff' size={25}/>              
          </TouchableOpacity>
          <Image style = {styles.imageTop} source={require('../assets/icon.png')} />
          <View style = {{flexDirection: 'column'}}>
            <RkText style={styles.topNavTextName}>Name</RkText>
            <RkText style={styles.topNavTextDesc}>Description</RkText>
           </View>
              <View style={styles.rightNav}>
              <TouchableOpacity>
                <Icon style={{marginLeft: 20,marginTop: 12}} name = "call" color='#fff' size={25}/>
               </TouchableOpacity>
               <TouchableOpacity>
                <Icon style={{marginLeft: 15,marginTop: 12}} name = "more-vert" color='#fff' size={25}/>
               </TouchableOpacity>                            
              </View>
          </View>        
      </View>
      <View style = {{flex: 7}}>
        <Text>Chats</Text>
      </View>         
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.borderStyle}>         
                <Icon name = "insert-emoticon" color='grey' size={30}/>          
                <TextInput  placeholder="Type a Message"/> 
                <TouchableOpacity  style = {{marginLeft: 100}} onPress = {()=> this.openAttachment()} > 
                  <Icon name = "attachment" color='grey' size={25}/>              
                </TouchableOpacity>
                <TouchableOpacity style = {{marginLeft: 10}} onPress = {()=>this.openCamera()} >
                  <Icon name = "camera-alt" color='grey' size={25}/>  
                 </TouchableOpacity>            
            </View>
            <TouchableOpacity>
              <Image style = {styles.imageBottom} source={require('../assets/icon.png')} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
  borderStyle:{
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'grey',
    width: 300,
    height: 50,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topArrow:{
    marginTop: 12,
    marginRight: -110
  },
  textInput:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  top:{
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#075E54',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  topNavTextName:{
    // flexDirection: 'column',
    color: '#fff',   
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: -90,
    marginTop: 12

  },
  topNavTextDesc:{
    color: '#fff',   
    fontSize: 15,
    marginLeft: -90,   

  },
  rightNav:{
    flexDirection: 'row',
    marginRight: 10
  },
  
   imageTop:{
    borderRadius: 100,
    height: 50,
    width: 50,
    marginLeft: 15,
    marginTop: 15
  },
  imageBottom:{
    borderRadius: 100,
    height: 50,
    width: 50,
    marginRight: 5
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default ChatScreen;

