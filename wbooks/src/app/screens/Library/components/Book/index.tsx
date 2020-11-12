import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Book as IBook } from '@interfaces/book';

import styles from './styles';

const PLACEHOLDER_IMAGE = 'https://reactnative.dev/img/tiny_logo.png';

interface Props {
  book: IBook;
  onPress: (item: IBook) => void;
}

function Book({ book: { title, author, imageUrl }, book, onPress }: Props) {
  const handlePress = () => onPress(book);

  return (
    <TouchableOpacity style={styles.bookCard} onPress={handlePress}>
      <Image
        style={styles.imgBook}
        resizeMode="cover"
        source={{ uri: imageUrl ? imageUrl : PLACEHOLDER_IMAGE }}
      />
      <View style={styles.infoBook}>
        <Text numberOfLines={1} style={styles.titleBook}>
          {title}
        </Text>
        <Text style={styles.authorBook}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Book;
