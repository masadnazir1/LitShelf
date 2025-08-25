import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colorTheme from '../../Theme/Colors';
import typography from '../../Theme/Typography';
import spacing from '../../Theme/Spacing';

const categories = [
  'Art',
  'Business',
  'Comedy',
  'Drama',
  'Science',
  'Technology',
  'History',
]; // Example categories

const CategoriesList = ({ onSeeMorePress, onCategoryPress }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity onPress={onSeeMorePress}>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal scrollable category buttons */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.slice(0, 6).map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() => onCategoryPress?.(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.semibold,
    color: colorTheme.blackAndWhite.black,
  },
  seeMore: {
    fontSize: typography.fontSizes.sm,
    color: colorTheme.primary[600],
    fontWeight: typography.fontWeights.medium,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  categoryButton: {
    backgroundColor: colorTheme.neutral[100],
    borderRadius: spacing.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginRight: spacing.sm,
  },
  categoryText: {
    color: colorTheme.primary[600],
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.medium,
  },
});

export default CategoriesList;
