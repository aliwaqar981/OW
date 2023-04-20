/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, TalktoDoctor, VideoArena} from '../../screens/appflow';
import {routes} from '../../constants';
import {Doc1, Doc2, OW1, VideoIcon, VideoIcon1} from '../../assets/svgicons';
import {OW2} from '../../assets/images';
import {COLORS} from '../../themes';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={'home'}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.red,
        tabBarInactiveTintColor: '#263238',
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}>
      <BottomTab.Screen
        name={routes.HOME}
        component={VideoArena}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({focused}) => (focused ? <VideoIcon1 /> : <VideoIcon />),
        }}
      />
      <BottomTab.Screen
        name={routes.VIDEOARENA}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? (
              <OW1 />
            ) : (
              <Image source={OW2} style={{width: 46, height: 26}} />
            ),
        }}
      />
      <BottomTab.Screen
        name={routes.TALKTODOCTOR}
        component={TalktoDoctor}
        options={{
          tabBarLabel: 'Talk to Doc',
          tabBarIcon: ({focused}) => (focused ? <Doc2 /> : <Doc1 />),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
