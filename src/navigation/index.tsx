import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStack';
import HomeStackNavigator from './HomeStack';
import ProfessionalStackNavigator from './ProfessionalStack';
import {useUser} from '../Hooks/UseContext';

const CurrentStack = createNativeStackNavigator();
const Navigation = () => {
  const {userId, isProfessional} = useUser();

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
