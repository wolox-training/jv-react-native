import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import book  from '@interfaces/book';

interface BookProps {
    book: book
}

const Book:React.FC<BookProps> = (props) => {

  const { book } = props;
  const { imageUrl } = book;

  return (
    <View style={styles.bookCard}>
       <View style={styles.containerBook}>

       <Image
        style={styles.imgBook}
        source={ { uri: (imageUrl) ? `${imageUrl}` : 'https://reactnative.dev/img/tiny_logo.png' } }
       />

        <View style={styles.infoBook}>
            <Text style={styles.titleBook}>{book.title}</Text>
            <Text style={styles.authorBook}>{book.author}</Text>
        </View>

     </View>
   </View>
  );
};

const styles = StyleSheet.create({
  bookCard: {
    backgroundColor: '#FFFFFF',
    minHeight: 90,
    margin: 20,
    borderRadius: 10,
  },
  containerBook:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 15,
    paddingBottom: 10,
  },
  infoBook: {
    marginLeft: 20,
    color: '#4A4A4A',
  },
  titleBook:{
    fontSize: 16,
    maxWidth: 180,
    fontWeight: 'bold',
  },
  authorBook: {
    fontSize: 14,
  },
  imgBook: {
    width: 39,
    height: 60,
  }
});

export default Book;