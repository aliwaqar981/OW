import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {COLORS} from '../themes';

// Define the IUserContext interface for typing
interface IUserContext {
  userId: string | null;
  setUserId: (userId: string | null) => void;
  isProfessional: string | null;
  setIsProfessional: (isProfessional: string | null) => void;
}

// Create the context with default undefined value
const UserContext = createContext<IUserContext | undefined>(undefined);

// Custom hook to use the UserContext
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// UserProvider component with correct typing
export function UserProvider({children}: {children: React.ReactNode}) {
  const [userId, setUserId] = useState<string | null>(null);
  const [isProfessional, setIsProfessional] = useState<string | null>(null);

  // Retrieve both userId and isProfessional from AsyncStorage on mount
  useEffect(() => {
    const retrieveData = async () => {
      const storedUserId = await AsyncStorage.getItem('UserId');
      const storedIsProfessional = await AsyncStorage.getItem('IsProfessional');

      if (storedUserId) setUserId(storedUserId);
      if (storedIsProfessional) setIsProfessional(storedIsProfessional);
    };

    retrieveData();
  }, []);

  // Save userId to AsyncStorage when it changes
  useEffect(() => {
    const storeUserId = async (userId: string | null) => {
      if (userId) {
        await AsyncStorage.setItem('UserId', userId);
      } else {
        await AsyncStorage.removeItem('UserId');
      }
    };

    storeUserId(userId);
  }, [userId]);

  // Save isProfessional to AsyncStorage when it changes
  useEffect(() => {
    const storeIsProfessional = async (isProfessional: string | null) => {
      if (isProfessional) {
        await AsyncStorage.setItem('IsProfessional', isProfessional);
      } else {
        await AsyncStorage.removeItem('IsProfessional');
      }
    };

    storeIsProfessional(isProfessional);
  }, [isProfessional]);

  // Set navigation bar color (assume `SystemNavigationBar` is defined correctly)
  useEffect(() => {
    SystemNavigationBar.setNavigationColor(COLORS.white);
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <UserContext.Provider
      value={{userId, setUserId, isProfessional, setIsProfessional}}>
      {children}
    </UserContext.Provider>
  );
}
