import {View,AppRegistry,Text,StyleSheet} from "react-native";
import React, { Component } from "react";
import { colors } from "react-native-elements";
import {TabNavigator} from 'react-navigation';

import Movies from './Movies';
import ItemMenuDetail from './ItemMenuDetail';
import {createStackNavigator} from 'react-navigation';
import CameraActivity from './CameraActivity';
const RootStack = createStackNavigator(
  {
    List: {
      screen: Movies
    },
    ItemMenuDetail: {
      screen: ItemMenuDetail
    },
    Camera:{
      screen: CameraActivity
    }
  },
  {
    initialRouteName: "List"
  }
);

 export class MenuList extends Component {
  render() {
    return (
     
      <RootStack/>
     
     ); 
  }

}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 50
  },
  mainContainer: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    width: 100 + "%",
    flex: 1
  },
  
});

export default  MenuList;
