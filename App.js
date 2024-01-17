import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './src/navigation/bottomTabs';
import AnimationScreen from './src/screens/SplashScreen';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';

export default function App() {
  SplashScreen.hideAsync();
  const [loaded, setLoaded] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);
  return (
    <NavigationContainer style={styles.container}>
      <MainTabNavigator loaded={loaded} setLoaded={setLoaded} animationFinished={animationFinished} setAnimationFinished={setAnimationFinished} />
      {/* <AnimationScreen/> */}
      <StatusBar style="auto" />
      {/* <AnimationScreen loaded={loaded} /> */}
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
