/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { StyleSheet, View, AppRegistry } from "react-native";
import React, { Component } from "react";
import { Dimensions, Text } from "react-native";
import { Input, Button, Header, List, ListItem } from "react-native-elements";
import icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from 'react-navigation';

import Toast from "react-native-simple-toast";
import { Tabs } from "./src/config/navigator";
import Movies from "./src/components/screen/Movies";
import ItemMenuDetail from "./src/components/screen/ItemMenuDetail";
import MenuList from "./src/components/screen/MenuList";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{
            barStyle: "light-content",
            backgroundColor: "#3D6DCC"
          }}
          leftComponent={{ icon: "menu", color: "#fff" }}
          rightComponent={{
            icon: "more-vert",
            color: "#fff",
            underlayColor: "#64b5f6"
          }}
          centerComponent={{ text: "Inspect App", style: { color: "#fff" } }}
          outerContainerStyles={{ backgroundColor: "#3D6DCC" }}
          innerContainerStyles={{ justifyContent: "space-around" }}
        />
        <Tabs />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    marginLeft: 10
  },
  mainContainer: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    width: 100 + "%",
    flex: 10
  },
  translucentBackground: {
    backgroundColor: "#b22a00"
  },
  textInputStyle: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20
  },

  statusBar: {
    flex: 0.4
  },
  navbar: {
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5E5",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2
    }
  },

  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "#F5F5F5"
  },
  toolbarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f44336"
  },

  title: {
    flex: 1,
    margin: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#ffffff"
  },
  leftIcon: {
    margin: 16
  },

  buttonStyles: {
    backgroundColor: "#f44336",
    height: 40,
    borderRadius: 10,
    marginRight: 16,
    marginLeft: 16
  },
  loginInput: {
    margin: 16
  },
  bottomView: {
    height: 56,
    elevation: 8,
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0
  }
});
