import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView, StatusBar } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book as IBook } from '@interfaces/book';

import Book from './components/Book';
import styles from './styles';

function Library() {
  const renderBook: ListRenderItem<IBook> = ({ item }) => <Book book={item} />;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <FlatList data={BOOKS_MOCK} renderItem={renderBook} keyExtractor={({ id }) => `${id}`} />
      </SafeAreaView>
    </>
  );
}

export default Library;
