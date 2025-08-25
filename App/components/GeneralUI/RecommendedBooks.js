import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

const fallbackImage = 'https://via.placeholder.com/120x180.png?text=No+Image';

const books = [
  {
    id: 1,
    title: 'The Silence',
    author: 'Mark Alpert',
    imageUrl: 'https://link-to-image-1.jpg',
  },
  {
    id: 2,
    title: 'The Speak',
    author: 'Traci Chee',
    imageUrl: 'https://link-to-image-2.jpg',
  },
  {
    id: 3,
    title: 'Book Title 3',
    author: 'Author Name',
    imageUrl: 'https://link-to-image-3.jpg',
  },
];

const RecommendedBooks = ({ onSeeMorePress }) => {
  const handleBookPress = book => {
    console.log(`Navigate to details for: ${book.title}`);
    // navigation logic here
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Recommended For You</Text>
        <TouchableOpacity
          onPress={onSeeMorePress}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel="See more recommended books"
        >
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>

      {/* Books */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.booksContainer}
      >
        {books.map(book => (
          <TouchableOpacity
            key={book.id}
            style={styles.bookItem}
            onPress={() => handleBookPress(book)}
            activeOpacity={0.8}
            accessibilityRole="imagebutton"
            accessibilityLabel={`Open details for ${book.title} by ${book.author}`}
          >
            <Image
              source={{ uri: book.imageUrl || fallbackImage }}
              defaultSource={{ uri: fallbackImage }}
              style={styles.bookImage}
              resizeMode="cover"
            />
            <Text style={styles.bookTitle} numberOfLines={1}>
              {book.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

RecommendedBooks.propTypes = {
  onSeeMorePress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  seeMore: {
    fontSize: 14,
    color: '#4B39EF',
    fontWeight: '500',
  },
  booksContainer: {
    flexDirection: 'row',
    paddingRight: 12,
  },
  bookItem: {
    marginRight: 12,
    alignItems: 'center',
    width: 120,
  },
  bookImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    marginBottom: 6,
  },
  bookTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#444',
    textAlign: 'center',
  },
});

export default RecommendedBooks;
