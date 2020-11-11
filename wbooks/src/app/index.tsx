import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from '@components/Navigator';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </>
  );
}

export default App;
