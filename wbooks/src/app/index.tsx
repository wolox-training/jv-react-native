import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import Book from '@screens/Library/components/Book/index';

import styles from './styles';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Book book={BOOKS_MOCK[3]} />
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
