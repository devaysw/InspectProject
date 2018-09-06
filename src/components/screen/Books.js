import { StyleSheet, View, AppRegistry,Text } from "react-native";
import React, { Component } from "react";
import { TabNavigator } from 'react-navigation';

  
 class Books extends Component {
  

  render() {
    return <View><Text>Books</Text></View>
  }

}
export default Books;
// export default TabNavigator({
//   Books: {
//     screen: Books
//   },
// });
const styles = StyleSheet.create({
  text: {
    fontSize:20,
    textAlign: "center",
    marginBottom: 50
  },
});

