import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Star icon for rating
import colorTheme from '../../Theme/Colors';
import typography from '../../Theme/Typography';
import spacing from '../../Theme/Spacing';

const BookCard = ({
  bookCover,
  title,
  author,
  rating,
  categories,
  onPress,
}) => {
  const renderCategories = () => {
    return categories.map((category, index) => (
      <TouchableOpacity key={index} style={styles.categoryButton}>
        <Text style={styles.categoryText}>{category}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: bookCover }} style={styles.bookImage} />
      </View>

      <View style={styles.textContainer}>
        {/* Book Title */}
        <Text style={styles.bookTitle} numberOfLines={1}>
          {title}
        </Text>

        {/* Author Name */}
        <Text style={styles.bookAuthor}>{author}</Text>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => (
            <Ionicons
              key={index}
              name={index < rating ? 'star' : 'star-outline'}
              size={16}
              color="#F9735A"
            />
          ))}
          <Text style={styles.ratingText}> {rating}</Text>
        </View>

        {/* Categories / Keywords */}
        <View style={styles.categoriesContainer}>{renderCategories()}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#ccc',
    borderRadius: spacing.xs,
    overflow: 'hidden',
  },
  bookImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  bookTitle: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.bold,
    color: colorTheme.neutral[800],
    marginTop: 12,
  },
  bookAuthor: {
    fontSize: 14,
    color: colorTheme.neutral[700],
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    fontSize: 14,
    color: colorTheme.accent[400],
    marginLeft: 6,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: spacing.md,
    flexWrap: 'wrap',
  },
  categoryButton: {
    backgroundColor: colorTheme.neutral[100],
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginTop: 8,
  },
  categoryText: {
    fontSize: 12,
    color: colorTheme.neutral[900],
  },
});

export default BookCard;
