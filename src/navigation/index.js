import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStack';
import {AuthContext} from '../../App';
import HomeStackNavigator from './HomeStack';

const CurrentStack = createNativeStackNavigator();
const Navigation = () => {
  const {userId} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <CurrentStack.Navigator screenOptions={{headerShown: false}}>
        <CurrentStack.Screen
          name="currentStack"
          component={userId ? HomeStackNavigator : AuthStackNavigator}
        />
      </CurrentStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
