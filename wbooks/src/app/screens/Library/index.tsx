import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import Routes from '@constants/routes';
import { Book as IBook } from '@interfaces/book';
import { HomeScreenNavigationProp } from '@interfaces/navigation';

import Book from './components/Book';
import styles from './styles';

interface Props {
  navigation: HomeScreenNavigationProp;
}

function Library({ navigation }: Props) {
  const renderKeyBook = ({ id }: IBook) => `${id}`;
  const handlePressItem = (item: IBook) => {
    navigation.navigate(Routes.Detail, item);
  };
  const renderBook: ListRenderItem<IBook> = ({ item }) => <Book book={item} onPress={handlePressItem} />;
  return (
    <SafeAreaView style={styles.body}>
      <FlatList data={BOOKS_MOCK} renderItem={renderBook} keyExtractor={renderKeyBook} />
    </SafeAreaView>
  );
}

export default Library;
