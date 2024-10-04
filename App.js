import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation';
import {COLORS} from './src/themes';
import {UserProvider} from './src/Hooks/UseContext';

const App = () => {
  return (
    <UserProvider>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Navigation />
    </UserProvider>
  );
};

export default App;
