import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book as IBook } from '@interfaces/book';

import Book from './components/Book';
import styles from './styles';

function Library({ navigation }: any) {
  const renderKeyBook = ({ id }: IBook) => `${id}`;
  const onPressItem = (item: IBook) => {
    navigation.navigate('Detail', item);
  };
  const renderBook: ListRenderItem<IBook> = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => onPressItem(item)}>
      <Book book={item} />
    </TouchableWithoutFeedback>
  );
  return (
    <SafeAreaView style={styles.body}>
      <FlatList data={BOOKS_MOCK} renderItem={renderBook} keyExtractor={renderKeyBook} />
    </SafeAreaView>
  );
}

export default Library;
