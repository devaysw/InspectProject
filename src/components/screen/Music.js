import {View,AppRegistry,Text,StyleSheet} from "react-native";
import React, { Component } from "react";
import { colors } from "react-native-elements";
import {TabNavigator} from 'react-navigation';


 class Music extends Component {
  render() {
    return <View><Text style ={styles.text}>Music</Text></View>
  }

}

export default  Music;


// export default TabNavigator({
//   Music: {
//     screen: Music
//   },
// });


// static navigationOptions = {
//   tabBarLabel: "Music",
//   tabBarIcon: () => <Icon size={24} name="music-note" color="white" />
// }
const styles = StyleSheet.create({
  text: {
    fontSize:20,
    textAlign: "center",
    marginBottom: 50,
    color :"#000",
    flex:1
  },
 
});