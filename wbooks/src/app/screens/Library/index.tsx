import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book as IBook } from '@interfaces/book';

import Book from './components/Book';

function Library() {
  const renderBook: ListRenderItem<IBook> = ({ item }) => <Book book={item} />;

  return <FlatList data={BOOKS_MOCK} renderItem={renderBook} keyExtractor={item => `${item.id}`} />;
}

export default Library;
