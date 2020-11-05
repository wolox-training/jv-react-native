import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { BOOKS_MOCK  } from '@constants/mockBooks';
import Book from '@screens/Library/components/Book';

function App() {
  return (
    <View style={styles.body}>
      <Book book={BOOKS_MOCK[3]}/>
    </View>
  );
};

export default App;
