import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Book from './components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';
import  book  from '@interfaces/book';

const Library = () => {

  const renderBook = ( { item } : { item:book } ) => (
    <Book book={item} />
  );

  return (
   <View style={styles.body}>
     <FlatList
        data={BOOKS_MOCK}
        renderItem={renderBook}
        keyExtractor={item => `${item.id}`}
      />
   </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#EAF6FA',
  }
});

export default Library;