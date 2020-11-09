import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import Book from '@screens/Library/components/Book';

import styles from './styles';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <Book book={BOOKS_MOCK[0]} />
      </SafeAreaView>
    </>
  );
}

export default App;
