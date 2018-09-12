import {
   StyleSheet,
  View,
  AppRegistry,
  Text,
  FlatList,
TouchableOpacity
} from "react-native";
import { Right } from 'native-base';
import React, { Component } from "react";
import { Input, Button
 } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Toast from "react-native-simple-toast";
import {  Card } from 'react-native-elements';

// const ButtonNavigate = StackNavigator({
//   Movies:{screen: Movies},
//   Favorite:{screen:Favorite}

// });
// NHI hai mu=ain kuch aur kr rahi thi usska  hai wo

const instituteDetailHTML='<table style="margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: right;">Institute Name&nbsp;</td><td>*institutename#</td></tr><tr><td style="text-align: right;">Institute Address</td><td>*Address#</td></tr></tbody></table>';


const menuData = [
  {
    key: "Conselling Area",
    AreaModel: [
      {
        text: "Conselling Area"
      },
      {
        text: "Reception Area"
      },
      {
        text: "Placement/Enturpreour Cell"
      },
      {
        text: "Pantry Area"
      },
      {
        text: "Washroom Area"
      },
      {
        text: "Pantry Area"
      },
      {
        text: "Play Ground"
      },
      {
        text: "Parking"
      },
      {
        text: "Outside Area"
      },
      {
        text: "Residential Area"
      }
    ]
  },
  {
    key: "Facilities",
    isChecked:false,
    checkbox:true,
    AreaModel: [
      {
        text: "Ramp/Lift",
        isChecked: false
      },
      {
        text: "Availability of First Aid Kit",
        isChecked: false
      },
      {
        text: "Safe Drinking Water",
        isChecked: false
      },
      {
        text: "Computer Lab",
        isChecked: false
      }
    ]
  }
];

class Movies extends Component {
  itemClicked = item => {
    this.props.navigation.navigate("ItemMenuDetail", { item });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.loginInput}>
          <Input
            leftIcon={<Icon name="building-o" color="black" size={25} />}
            inputStyle={{ marginLeft: 10, color: "black" }}
            keyboardAppearance="light"
            placeholder="Institute"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            blurOnSubmit={false}
            placeholderTextColor="black"
            errorStyle={{ textAlign: "center", fontSize: 12 }}
         />
        </View>

        <View style={styles.loginInput}>
          <Input
            leftIcon={<Icon name="address-book" color="black" size={25} />}
            inputStyle={{ marginLeft: 10, color: "black" }}
            placeholder="Institute Address"
            numberOfLines={3}
            autoFocus={false}
            multiline
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            blurOnSubmit={false}
            placeholderTextColor="black"
            errorStyle={{ textAlign: "center", fontSize: 12 }}
            />
        </View>

        <View style={styles.loginInput}>
          <Button style={styles.buttonStyles} title="Submit" />
          </View>
         
          <View style={styles.mainContainer}>
        <FlatList
             data={menuData}
            renderItem ={({item})=>(
            <TouchableOpacity onPress={() => this.itemClicked(item)}>
            <Text style={styles.item} key={item.key}>
                {item.key}
            </Text>
          <Right style={styles.topLeft}>
             <Icon name='arrow-right' color='gray'size={16}/>
          </Right>
      <View
          style={{
            paddingVertical: 10,
            borderTopWidth: 1,
            borderColor: "#CED0CE"
          }}
        >
        </View>
</TouchableOpacity>

)}>
</FlatList>
      </View>
          </View>
    );
      }
}

export default Movies;

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
    flex: 10,
    
    
  },

  textInputStyle: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    flex: 1,
    margin: 10,
    fontSize: 16,
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
  item: {
    padding: 10,
    fontSize: 14,
  flex:1,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "black",
    textAlign: "left"
  },
  topLeft: {
    position: "absolute",
    left:350,
    top: 0,
   
  },
  card:{
    padding:0
    
  }
 



});
