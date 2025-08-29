import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colorTheme from '../../Theme/Colors';

const BookProgressBar = ({
  currentPage = 0,
  totalPages = 1,
  bookmarked = false,
  onToggleBookmark,
}) => {
  const progress = totalPages > 0 ? currentPage / totalPages : 0;

  return (
    <View style={styles.container}>
      {/* Progress Line */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBg]} />
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      {/* Content Row */}
      <View style={styles.content}>
        <Text style={styles.pageText}>
          {currentPage} of {totalPages}
        </Text>

        <TouchableOpacity onPress={onToggleBookmark}>
          <Ionicons
            name={bookmarked ? 'bookmark' : 'bookmark-outline'}
            size={22}
            color={colorTheme.primary[600]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookProgressBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorTheme.blackAndWhite.white,
    borderTopWidth: 1,
    borderTopColor: colorTheme.neutral[200],
  },
  progressContainer: {
    height: 3,
    backgroundColor: colorTheme.neutral[200],
    position: 'relative',
  },
  progressBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colorTheme.neutral[200],
  },
  progressFill: {
    height: 3,
    backgroundColor: colorTheme.primary[600],
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  pageText: {
    fontSize: 14,
    color: colorTheme.neutral[600],
  },
});
