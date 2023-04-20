/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation';
import {COLORS} from './src/themes';

export const AuthContext = React.createContext({
  userId: null,
  setUserId: () => null,
});
const App = () => {
  const [userId, setUserId] = useState('a');

  console.log('user________', userId);

  useEffect(() => {
    retrieveData();
  }, []);

  useEffect(() => {
    setDataLocally(userId);
  }, [userId]);
  useEffect(() => {
    SystemNavigationBar.setNavigationColor(COLORS.white);
  }, []);

  const retrieveData = async () => {
    const userId = await AsyncStorage.getItem('UserId');
    if (userId) {
      setUserId(userId);
    }
  };
  const setDataLocally = userId => {
    if (userId == null || userId == undefined) {
      AsyncStorage.removeItem('UserId');
    } else {
      AsyncStorage.setItem('UserId', userId);
      setUserId(userId);
    }
  };

  return (
    <AuthContext.Provider value={{userId, setUserId}}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Navigation />
    </AuthContext.Provider>
  );
};

export default App;
