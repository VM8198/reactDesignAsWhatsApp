import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './MainScreen'
import React from 'react';
import OpenCamera from './camera'
import ChatScreen from './ChatScreen'
import Chats from './Chats'
import { Router, Scene } from 'react-native-router-flux'


// const MainNavigator = createStackNavigator({

//   Main: {screen: MainScreen},
//   Chats: {screen: Chats},
//   ChatScreen: {screen: ChatScreen},

// },
// {
//   headerMode: 'none',
//   navigationOptions: {
//     headerVisible: false,
//   }
//  });

// const AppNavigator = createAppContainer(MainNavigator);

// export default AppNavigator;

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "main" component = {MainScreen} initial = {true} hideNavBar={true} />
         <Scene key = "chat" component = {Chats} hideNavBar={true} />
         <Scene key = "chatScreen" component = {ChatScreen} hideNavBar={true} />
         <Scene key = "camera" component = {OpenCamera} hideNavBar={true} />

      </Scene>
   </Router>
)
export default Routes