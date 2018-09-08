import React, { Component } from "react";
import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  CheckBox,
} from "react-native";
import { Right, Left } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";




export class ItemMenuDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      areaModel: [],
      isFromPrevious: false,
      showCheckbox:false,
    };
  }

  itemClicked = (index, item) => {
    if(!this.state.showCheckbox){
    this.props.navigation.navigate("Camera", {
      item, index, onDone: (item, index) => {
        const areaModelTemp = this.state.areaModel;
        const m = areaModelTemp[index];
        console.log("Item from CameraActivity To ItemMenuDetail:"+JSON.stringify(item));
        if (item.length > 0) {

          m.images = item;
          //this.state.areaModel=areaModel;
          this.setState({
            areaModel: areaModelTemp,
          });

          console.log("Filled Data :" + JSON.stringify(this.state.areaModel));
        }
      }
    });
  }else{
    const item=this.state.areaModel[index];
    item.isChecked=!item.isChecked;
    this.setState({
      state:this.state,
    })
  }

  };
  onCheckboxChange=(index)=>{
    const item=this.state.areaModel[index];
    item.isChecked=!item.isChecked;
    
  };

  render() {
    const { params } = this.props.navigation.state;

    const item = params.item;
    const data = item.AreaModel;
    this.state.areaModel = data;
    console.log("data:->"+JSON.stringify(item));
      this.state.showCheckbox=item.checkbox;
    console.log("isChecked:-> "+this.state.showCheckbox);
    {/* {
                    item.images?
                    <Icon name="check" color="green" size={16} /> 
                    :
                    <Icon name="check" color="gray" size={16} /> 
                  } */}
    return (
      <View style={styles.mainContainer}>

        <FlatList
          data={this.state.areaModel}
          extraData={this.state}
          keyExtractor={(item, index) => { return index.toString() }}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => this.itemClicked(index, item)}>
              <View
                style={{
                  paddingVertical: 10,
                  borderTopWidth: 1,
                  flexDirection: "row",
                  borderColor: "#CED0CE"
                }}
              >
                <Text style={styles.item}>{item.text}</Text>
                
                <Right style={styles.topLeft}>
                  {
                    this.state.showCheckbox?
                    <CheckBox
                    value={item.isChecked}
                    onValueChange={() => this.onCheckboxChange(index)}
                    />
                  :
                    item.images ?
                      <Icon name="check" color="green" size={16} />
                      :
                      <Icon name="check" color="gray" size={16} />
                  
                }
                </Right>


              </View>
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
    flex: 10
  },
  item: {
    padding: 10,
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "bold",
    flex: 1,
    color: "black",
    textAlignVertical: 'center'


  },
  rendercontainer: {
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 1,
    marginRight: 10,
  },
  topLeft: {
    flex: 0,

  },


});
