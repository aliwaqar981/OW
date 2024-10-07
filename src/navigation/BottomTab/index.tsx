import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, TalktoDoctor, VideoArena} from '../../screens/appflow';
import {routes} from '../../constants';
import {Doc1, Doc2, OW1, VideoIcon, VideoIcon1} from '../../assets/svgicons';
import {OW2} from '../../assets/images';
import {COLORS, FONTS} from '../../themes';
export type BottomStackParamList = {
  Home: undefined;
  TalktoDoctor: undefined;
  VideoArena: undefined;
};

const BottomTab = createBottomTabNavigator<BottomStackParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.red,
        tabBarInactiveTintColor: '#263238',
        tabBarLabelStyle: {
          fontSize: 10,
        },
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: FONTS.Nunito_Bold,
          color: COLORS.black,
        },
      }}>
      <BottomTab.Screen
        name={'VideoArena'}
        component={VideoArena}
        options={{
          tabBarIcon: ({focused}) => (focused ? <VideoIcon1 /> : <VideoIcon />),
          headerShown: true,
          headerTitle: 'Video Arena',
          headerTitleAlign: 'center',
        }}
      />
      <BottomTab.Screen
        name={'Home'}
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
        name={'TalktoDoctor'}
        component={TalktoDoctor}
        options={{
          tabBarLabel: 'Talk to Doc',
          tabBarIcon: ({focused}) => (focused ? <Doc2 /> : <Doc1 />),
          headerShown: true,
          headerTitle: 'Talk To Doc',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
