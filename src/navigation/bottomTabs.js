// mainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MyStack from './appStack';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = ({ setLoaded, animationFinished, setAnimationFinished }) => {
  const display = !animationFinished ? 'none' : 'flex';
  return (
    <Tab.Navigator screenOptions = {{tabBarStyle:{display:display}}}>
      <Tab.Screen
        name="Home"
        children = {
            (props) => < MyStack {
              ...props
            }
            setLoaded = {
              setLoaded
            }
            animationFinished = {
              animationFinished
            }
            setAnimationFinished = {
              setAnimationFinished
            }
            />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
