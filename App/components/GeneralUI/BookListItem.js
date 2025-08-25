import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BookListItem = ({ bookCover, title, author, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Book cover */}
      <Image source={{ uri: bookCover }} style={styles.bookImage} />

      {/* Book Title and Author */}
      <View style={styles.textContainer}>
        <Text style={styles.bookTitle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',

    marginVertical: 10,
  },
  bookImage: {
    width: 80,
    height: 120,

    resizeMode: 'cover',
  },
  textContainer: {
    marginLeft: 12,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default BookListItem;
