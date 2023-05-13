/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation';
import {COLORS} from './src/themes';
import {ProfessionalBookingList} from './src/screens/appflow';

export const AuthContext = React.createContext({
  userId: null,
  setUserId: () => null,
  isProfessional: null,
  setIsProfessional: () => null,
});
const App = () => {
  const [userId, setUserId] = useState('');
  const [isProfessional, setIsProfessional] = useState('');

  console.log('isProfessional_____', isProfessional);

  useEffect(() => {
    retrieveData();
  }, []);

  useEffect(() => {
    setDataLocally(userId);
  }, [userId]);

  useEffect(() => {
    retrieveProfessionalData();
  }, []);

  useEffect(() => {
    setProfessionalDataLocally(isProfessional);
  }, [isProfessional]);

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
  const retrieveProfessionalData = async () => {
    const isProfessional = await AsyncStorage.getItem('IsProfessional');
    if (isProfessional) {
      setIsProfessional(isProfessional);
    }
  };
  const setProfessionalDataLocally = isProfessional => {
    if (isProfessional == null || isProfessional == undefined) {
      AsyncStorage.removeItem('IsProfessional');
    } else {
      AsyncStorage.setItem('IsProfessional', isProfessional);
      setIsProfessional(isProfessional);
    }
  };

  return (
    <AuthContext.Provider
      value={{userId, setUserId, isProfessional, setIsProfessional}}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <ProfessionalBookingList />
    </AuthContext.Provider>
  );
};

export default App;
