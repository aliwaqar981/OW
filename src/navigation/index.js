/* eslint-disable curly */
import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStack';
import {AuthContext} from '../../App';
import HomeStackNavigator from './HomeStack';
import ProfessionalStackNavigator from './ProfessionalStack';

const CurrentStack = createNativeStackNavigator();
const Navigation = () => {
  const {userId, isProfessional} = useContext(AuthContext);
  const CurrentStackNavigator = () => {
    if (userId) return <HomeStackNavigator />;
    else if (isProfessional) return <ProfessionalStackNavigator />;
    else return <AuthStackNavigator />;
  };
  return (
    <NavigationContainer>
      <CurrentStack.Navigator screenOptions={{headerShown: false}}>
        <CurrentStack.Screen
          name="currentStack"
          component={CurrentStackNavigator}
        />
      </CurrentStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
