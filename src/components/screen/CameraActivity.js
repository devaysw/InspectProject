import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from "react-native";
import { RNCamera as Camera } from "react-native-camera";
import GridView from 'react-native-grid-view';
// path: null
//      this.setState({ path: data.uri });


class ImageView extends Component{
  render(){
    return (
      <View style={styles.imageView}>
        <Image 
          source={{uri:this.props.datas.item.data}}
          style={styles.image}
          />

      </View>
    );
  }

}

export class CameraActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: [],
    };
  }

   takePicture = async () => {
        try {
          const data = await this.camera.takePictureAsync();
          const datas=this.state.path;
          datas.push(data.uri);
          this.setState({ path: datas });
          // this.props.updateImage(data.uri);
          // console.log('Path to image: ' + data.uri);
        } catch (err) {
          console.log('err: ', err);
        }
      };


      renderImage() {
        return (
          <View>
           <GridView
        items={this.state.path}
        itemsPerRow={3}
        renderItem={this.renderItem}
        style={styles.listView}
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

  
  render() {
        return (
          <View style={styles.container}>
            {this.state.path ? this.renderImage() : this.renderCamera()}
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000"
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
