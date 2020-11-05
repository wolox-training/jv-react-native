import React from 'react';
import { Image, Text, View } from 'react-native';
import { Book as BookInterface } from '@interfaces/book';
import styles from './styles';

interface Props {
    book: BookInterface;
}

function Book ({ book: { title, author, imageUrl } }: Props) {

    return (
        <View style={styles.bookCard}>
           <View style={styles.containerBook}>
                <Image
                    style={styles.imgBook}
                    source={ { uri: (imageUrl) ? `${imageUrl}` : 'https://reactnative.dev/img/tiny_logo.png' } }
                />

                <View style={styles.infoBook}>
                    <Text style={styles.titleBook}>{title}</Text>
                    <Text style={styles.authorBook}>{author}</Text>
                </View>
          </View>
       </View>
    );
}

export default Book;

