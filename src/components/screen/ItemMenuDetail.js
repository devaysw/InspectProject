import React, { Component } from "react";
import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { Right ,Left } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export class ItemMenuDetail extends Component {
  itemClicked = (item) =>
  {
    alert("Cliked");
    this.props.navigation.navigate("Camera", { item });  
};
  
  render() {
    const { params } = this.props.navigation.state;
    
    const item =params.item;
    const data = item.AreaModel;

   
    return (
      <View style={styles.mainContainer}>

      <FlatList
          data={data}
          keyExtractor={(item, index) => {return index}}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.itemClicked(item)}>
            
              <Text style={styles.item}>{item.text}</Text>
             
              <Right style={styles.topLeft}>
                <Icon name="check" color="gray" size={16} />
              </Right>

              <View
                style={{
                  paddingVertical: 10,
                  borderTopWidth: 1,
                  borderColor: "#CED0CE"
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default ItemMenuDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    width: 100 + "%",
    flex: 10
  },
  item: {
    padding: 10,
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "black",
    textAlignVertical:'center'
   
  
  },
  topLeft: {
    position: "absolute",
    left: 350,
    top: 10,
    justifyContent:'center'
  },

 
});
