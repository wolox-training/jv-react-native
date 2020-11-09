import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Library from '@screens/Library';

import styles from './styles';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <Library />
      </SafeAreaView>
    </>
  );
}

export default App;
