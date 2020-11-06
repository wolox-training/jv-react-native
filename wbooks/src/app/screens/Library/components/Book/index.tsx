import React from 'react';
import { Image, Text, View } from 'react-native';
import { Book as IBook } from '@interfaces/book';

import styles from './styles';

const PLACEHOLDER_IMAGE = 'https://reactnative.dev/img/tiny_logo.png';

interface Props {
  book: IBook;
}

function Book({ book: { title, author, imageUrl } }: Props) {
  return (
    <View style={styles.bookCard}>
      <Image
        style={styles.imgBook}
        resizeMode="contain"
        source={{ uri: imageUrl ? imageUrl : PLACEHOLDER_IMAGE }}
      />
      <View style={styles.infoBook}>
        <Text style={styles.titleBook}>{title}</Text>
        <Text style={styles.authorBook}>{author}</Text>
      </View>
    </View>
  );
}

export default Book;
