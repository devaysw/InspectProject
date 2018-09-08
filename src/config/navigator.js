import React from 'react';
import {StyleSheet} from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation';

import Movies from '../components/screen/Movies';
import Icon from "react-native-vector-icons/MaterialIcons";

import Books from '../components/screen/Books';

import  Music from '../components/screen/Music';
import MenuList from "../components/screen/MenuList";

export  const Tabs = TabNavigator({

    Movies: {
        screen: MenuList,
        navigationOptions:{
            tabBarLabel:'Movies',
            tabBarIcon:()=>{ return<Icon name ="movie" color ={"white"} size={20}/>}
          }
      
    },
    Books: {
        screen: Books,
        navigationOptions:{
            tabBarLabel:'Books',
            tabBarIcon:()=>{return <Icon name ="book" color ={"white"} size={20}/>}
          }
    },
    Music: {
        screen: Music,
        navigationOptions:{
            tabBarLabel:'Music',
            tabBarIcon:()=>  {return <Icon name ="local-pizza" color ={"white"} size={20}/>}
          }
    }
},{

    tabBarPosition:'bottom',
    swipeEnabled:false,
    lazy:true,
    animationEnabled:true,
     tabBarOptions:{
        showIcon:true,
        scrollEnabled:false,
        style: {
            width: 100 + "%",
            height:56,
            backgroundColor: '#4586e0',
            activeBackgroundColor:'#fff'
          },
          indicatorStyle: {
            backgroundColor: '#4586e0'
          },
          labelStyle: {
            fontSize: 11,
            color: "white",
            fontFamily: "kohinoor",
            textAlign:"center",
          },
        },



    }
 
);





