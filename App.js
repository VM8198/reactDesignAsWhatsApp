import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {RkButton, RkText, RkTabSet,RkTabView, RkTab, RkTheme } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Chats from './src/Chats'
import Calls from './src/Calls'
import Status from './src/status'

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

class App extends React.Component {

  render() {
    return (
     <ScrollView>
      <View>
        <View style = {styles.top}>
          <RkText style={styles.topNavText}>WhatsApp</RkText>
            <View style={styles.rightNav}>
              <Icon style={{marginLeft: 20}} name = "search" color='#fff' size={25}/>
              <Icon style={{marginLeft: 15}} name = "more-vert" color='#fff' size={25}/>
            </View>
        </View>
      </View>  

       <RkTabView rkType='dark'>
         <RkTabView.Tab title={'Chats'}>
          <Chats/>
         </RkTabView.Tab>
         <RkTabView.Tab title={'Status'}>
           <Status/>
         </RkTabView.Tab>
         <RkTabView.Tab title={'Calls'}>
           <Calls/>
         </RkTabView.Tab>
       </RkTabView>    
     </ScrollView>
      

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
  top:{
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#075E54',
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  topNavText:{
    color: '#fff',
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold',
    // marginTop: 10
  },
  rightNav:{
    flexDirection: 'row',
    // marginTop: 10
  },
  tabs:{
    backgroundColor: '#075E54'
  }
});

export default App;
