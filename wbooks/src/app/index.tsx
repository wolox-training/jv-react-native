import React from 'react';
import Library from '@screens/Library';
import { StatusBar } from 'react-native';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Library />
    </>
  );
}

export default App;
