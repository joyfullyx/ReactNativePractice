import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";
// import beach from "../../assets/beach.jpg";
// import forest from "../../assets/forest.jpg";
// import mountain from "../../assets/mountain.jpg"

const ImageScreen = () => {
  return (
    <View>
      {/* <ImageDetail title="Forest" imageSource={forest} />
      <ImageDetail title="Beach" imageSource={beach}/>
      <ImageDetail title="Mountain" imageSource={mountain} /> */}
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={7}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
