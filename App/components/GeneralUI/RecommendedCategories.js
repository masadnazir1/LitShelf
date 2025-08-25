import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colorTheme from '../../Theme/Colors';
import typography from '../../Theme/Typography';
import spacing from '../../Theme/Spacing';

const categories = [
  { id: 1, title: 'Business', icon: 'trending-up', iconLib: 'Ionicons' },
  { id: 2, title: 'Personal', icon: 'user', iconLib: 'FontAwesome5' },
  {
    id: 3,
    title: 'Music',
    icon: 'music-note',
    iconLib: 'MaterialCommunityIcons',
  },
  {
    id: 4,
    title: 'Photography',
    icon: 'camera',
    iconLib: 'MaterialCommunityIcons',
  },
];

const RecommendedCategories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recommended Categories</Text>

      <View style={styles.categoriesContainer}>
        {categories.map(category => (
          <TouchableOpacity key={category.id} style={styles.categoryButton}>
            {/* Check iconLib and render corresponding icon */}
            {category.iconLib === 'Ionicons' && (
              <Ionicons
                name={category.icon}
                size={24}
                color={colorTheme.neutral[800]}
                style={styles.icon}
              />
            )}
            {category.iconLib === 'FontAwesome5' && (
              <FontAwesome5
                name={category.icon}
                size={24}
                color={colorTheme.neutral[800]}
                style={styles.icon}
              />
            )}
            {category.iconLib === 'MaterialCommunityIcons' && (
              <MaterialCommunityIcons
                name={category.icon}
                size={24}
                color={colorTheme.neutral[800]}
                style={styles.icon}
              />
            )}
            <Text style={styles.categoryText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  header: {
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.bold,
    color: colorTheme.neutral[800],
    marginBottom: 12,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colorTheme.neutral[200],
    borderRadius: spacing.sm,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    width: '45%',
  },
  icon: {
    marginRight: 8,
  },
  categoryText: {
    color: colorTheme.neutral[800],
    fontSize: 14,
    fontWeight: '500',
  },
});

export default RecommendedCategories;
