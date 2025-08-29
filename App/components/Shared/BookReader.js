// components/BookReader.js
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import spacing from '../../Theme/Spacing';
import typography from '../../Theme/Typography';
import colorTheme from '../../Theme/Colors';

const BookReader = ({ content = [], onProgressChange }) => {
  const totalPages = content.length;

  const handleScroll = e => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const pageHeight = e.nativeEvent.layoutMeasurement.height;

    console.log('PAGE HEIGHT', pageHeight);

    // calculate current page
    const pageIndex = Math.floor(offsetY / pageHeight) + 1;
    if (onProgressChange) {
      onProgressChange(Math.min(pageIndex, totalPages));
    }
  };

  return (
    <ScrollView
      style={styles.scroll}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      {content.map((paragraph, index) => (
        <Text key={index} style={styles.text}>
          {paragraph}
        </Text>
      ))}
    </ScrollView>
  );
};

export default BookReader;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colorTheme.blackAndWhite.white,
  },
  text: {
    fontSize: typography.fontSizes.md,

    marginBottom: spacing.md,
    color: colorTheme.neutral[800],
  },
});
