import { Button, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";

const { height, width } = Dimensions.get('screen');

const AnimationScreen = ({navigation, animationFinished, setAnimationFinished}) => {
  const animation = useRef(null);
  const container = useRef(null);

  return (
    <View ref={container} style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'black', position: 'absolute', top: 0, left: 0, height, width, zIndex: (animationFinished) ? -1000 : 1000 }}>
      {/* <Stack.Screen options={{ headerShown:false }} /> */}
      <LottieView
        ref={animation}
        autoPlay
        loop={false}
        style={{width:'80%',maxWidth:400}}
        onAnimationFinish={() => {
          setAnimationFinished(true);
          navigation.navigate('Home');
        }}
        source={require("../../assets/lottie/NetflixAnimation.json")}
      />
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({});
