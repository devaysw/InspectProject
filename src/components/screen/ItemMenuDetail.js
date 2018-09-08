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

  constructor(props){
    super(props); 
    this.state={
      areaModel:[]  
  };
}

  itemClicked = (index,item) =>
  {
    alert("Cliked");
    this.props.navigation.navigate("Camera", { item,index,onDone:(item,index) =>{
      const areaModel=this.state.areaModel;
      const m=areaModel[index];
      m.images=item;
      this.state.areaModel=areaModel;
      console.log("Filled Data :"+JSON.stringify(this.state.areaModel));
    } });  

};

setIcons =(item) =>{
  item.images?
  "green"
  :
  "gray"
};
  
  render() {
    const { params } = this.props.navigation.state;
    
    const item =params.item;
    const data = item.AreaModel;
    this.state.areaModel=data;
   
    return (
      <View style={styles.mainContainer}>

      <FlatList
          data={this.state.areaModel}
          keyExtractor={(item, index) => {return index}}
          renderItem={({ index,item }) => (
            <TouchableOpacity onPress={() => this.itemClicked(index,item)}>
            
              <Text style={styles.item}>{item.text}</Text>
             
              <Right style={styles.topLeft}>
              <Icon name="check" color={this.setIcons(item)} size={16} /> 
              
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
