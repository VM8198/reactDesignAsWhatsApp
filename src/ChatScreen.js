import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView} from 'react-native';
import {RkButton, RkText, RkTabSet,RkTabView, RkTab, RkTheme, RkTextInput } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import OpenCamera from './camera';
import { DocumentPicker} from 'expo';


let message = [];


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

class ChatScreen extends React.Component {

  state = {
    show: 1,
    message: '',
    messageState: 1,
    value: ''
  }
 
  openCamera(){
    Actions.camera();
  }

  changeState(){
    this.setState({show: 2})  ;
  }

  changeButton(){
    if(this.state.show == 2 ){
      return(
        <View>
        <Icon style={styles.imageBottom} name = "send" color='green' size={50}/>
        </View>
        );

    }
  }

  simpleButton(){
    if(this.state.show == 1){
      return(
        <Image style = {styles.imageBottom} source={require('../assets/audio.jpeg')} />
        )
      }
  }

  addMessage(){
    message.push(this.state.message); 
    this.setState({message: ''});
    console.log("msg",this.state.message);
    if(this.state.message = ''){
     return(
        <Image style = {styles.imageBottom} source={require('../assets/audio.jpeg')} />
        )
    }
  }

  showMessage(){
    if(this.state.messageState = 2)  
       return message.map((item)=>{ 
      return(      
        <View style = {styles.messageDesign}>
          <Text style = {styles.msgFonts}> {item} </Text>
          <View style = {{flexDirection: 'row-reverse'}}>
            <Icon name = "done-all" color='#858c96' size={20}/>
            <Text style = {{color: '#858c96',fontSize: 15,marginRight: 3}}>5:46 PM</Text>
            </View>
        </View>             
        );   
     });
  }

  
   
   pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    console.log('result', result);
    if (!result.cancelled) {
      this.setState({
        image: result,
      });
      alert("Your selected file is"+result.name);
    }
  } 
  

  render() {
    return (
    <View style = {{flex: 1}}>
    <TouchableOpacity onPress={()=>{Actions.profile()}}>
      <View>
          <View style = {styles.top}>
          <TouchableOpacity  style = {styles.topArrow} onPress = {()=>Actions.main()}>
            <Icon name = "arrow-back" color='#fff' size={25}/>              
          </TouchableOpacity>
          <Image style = {styles.imageTop} source={require('../assets/download.jpeg')} />
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
      </TouchableOpacity>
      <ScrollView>
      <View style = {styles.messageView}>        
           {this.showMessage()}
      </View>     
      </ScrollView>    
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>                                         
            <View style={styles.borderStyle}>         
                <Icon name = "insert-emoticon" color='grey' size={30}/>
                  <TextInput style = {styles.textInput} multiline={true}  placeholder="Type a Message" onChangeText={(text)=>{this.changeState(),this.setState({message: text})}} value={this.state.message}/>                
                <TouchableOpacity style = {{marginLeft: 15}} onPress={()=>{this.pickDocument()}} > 
                  <Icon name = "attachment" color='grey' size={25}/>              
                </TouchableOpacity>
                <TouchableOpacity style = {{marginLeft: 10}} onPress = {()=>this.openCamera()} >
                  <Icon name = "camera-alt" color='grey' size={25}/>  
                </TouchableOpacity>            
            </View>
                
            <TouchableOpacity>
                {this.simpleButton()}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.addMessage(),this.setState({messageState: 2})}}>   
                {this.changeButton()}
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
    fontSize: 15,
    fontWeight: 'bold',
    width: 180,
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
  imageBottomAfterClick:{
   height: 0,
   width: 0
  },
  messageView:{   
    // alignItems: 'flex-end',
    // fontSize: 50,
    // marginTop: 10
  },
  messageView:{
    flex: 7,
    alignItems: 'flex-end',
  },
  msgFonts:{
    fontSize: 15,
    color: '#000'
  },
  messageDesign:{
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#dcf8c6',
    margin: 5,    
  }
});

export default ChatScreen;

