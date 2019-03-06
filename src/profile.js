import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import {RkButton, RkText, RkTabSet,RkTabView, RkTab, RkTheme } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/MaterialIcons';
const dimensions = Dimensions.get('window');
// const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;


class App extends React.Component {

  render() {
    return (      
      <ScrollView>
         <View style = {styles.container}>
          <View>
           <Image style={{ height: 300, width: imageWidth }} source={require('../assets/download.jpeg')}    />
          </View>
         </View>   
       </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },
  
});

export default App;
