import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
  FlatList
} from "react-native";
import { RNCamera as Camera } from "react-native-camera";
import { ListItem } from "react-native-elements";
// path: null
//      this.setState({ path: data.uri });


class ImageView extends Component{
  render(){
    return (
      <View style={styles.imageView}>
        <Image 
          source={{uri:this.props.datas.item.data}}
          style={styles.image}/>
           </View>
    );
  }
}

export class CameraActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: [],
      capture:false,
      index:-1,
    };
  }

   takePicture = async () => {
        try {
          const data = await this.camera.takePictureAsync();
          const datas=this.state.path;
          const image;
          image.image=data.uri;
          
          datas.push(image);
          this.setState({ path: datas });
          this.setState(
            {
              capture:false
            }
          )
          // this.props.updateImage(data.uri);
          console.log('Path to image: ' + data.uri);
        } catch (err) {
          console.log('err: ', err);
        }
      };


      renderImage() {
        return (
          <View style={styles.container}>
     <FlatList 
              data={this.state.path}
              renderItem = {(item)=>{
                
                console.log("ayesha is beutiful "+JSON.stringify(item.item));
                return <Image source={{uri:item.item}} style={{width:100,height:100}} />
                }
              }
              keyExtractor = {(index)=>{return index}}
              />
          </View>
        );
      }

      renderItem(item) {
        return <ImageView datas={item} />
      }


  renderGridItem = item => (
    <View style={styles.item}>
      <View style={styles.flex} />

      // <Image source={{isStatic:true, uri: item }} resizeMode='cover'  />
  
    </View>
  );

  renderCamera() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        flashMode={Camera.Constants.FlashMode.off}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
      >
        <TouchableHighlight
          style={styles.capture}
          onPress={this.takePicture.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.5)"
        >
          <View />
        </TouchableHighlight>
      </Camera>
    );
  }

  sendToBack=()=>{
      this.props.navigation.state.params.onDone(this.state.path,this.state.index);
     // this.goBack();
     this.props.navigation.goBack(null);
    }

  
  render() {
    const { params } = this.props.navigation.state;
    
    const item =params.item;
    const index=params.index;
    console.log("Value from previous : "+JSON.stringify(params));
    this.state.index=index;
    
    
    return (
        
          <View style={styles.container}>
          {this.state.capture?
         this.renderCamera()
          :
          <View style={styles.previewContainer}>
          <View style={styles.title}>
            <Text style={styles.text}>
              TextInput
            </Text>
            <TouchableHighlight style={styles.button } onPress={() => {this.setState({capture:true})}}>
              <Text style={styles.buttontext}>CAPTURE</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button } onPress={() => {this.sendToBack()}}>
            <Text style={styles.buttontext}>SUBMIT</Text>
          </TouchableHighlight>
          </View>
          <View style={styles.grid}>
          {this.renderImage()}
          </View>
          </View>}
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    alignItems:"center",
  },
  text:{
    padding: 10,
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "black",
    textAlignVertical:'center',
  },
  buttontext:{
    padding: 10,
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "black",
    textAlign:"center",
  },
  title:{
    alignSelf:'stretch',
    borderWidth:1,
    borderColor:"#0FF",
    flexDirection:"row",

  },
  button:{
    width:130,
    alignSelf:"flex-end"
  },
  grid : {
    flex:1,
  },
  previewContainer:{
      flex:1,
    flexDirection:"column",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: "#FFF",
    marginBottom: 15
  },
  cancel: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "transparent",
    color: "#FFF",
    fontWeight: "600",
    fontSize: 17
  },
  flex: {
    flex: 1
  },
  item: {
    height: 150,
    padding: 10,
    backgroundColor:"#99ffff"
  }
});

export default CameraActivity;
