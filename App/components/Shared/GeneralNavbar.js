import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colorTheme from '../../Theme/Colors';
import typography from '../../Theme/Typography';
import spacing from '../../Theme/Spacing';

const Header = ({ title = 'Title', onBackPress, rightComponent = null }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons
          name="chevron-back"
          size={24}
          color={colorTheme.primary[700]}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Component (optional icon or button) */}
      <View style={styles.rightPlaceholder}>
        {rightComponent ? rightComponent : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colorTheme.neutral[100],
    borderBottomWidth: 1,
    backgroundColor: colorTheme.blackAndWhite.white,
  },
  backButton: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.medium,
    color: colorTheme.neutral[900],
    textAlign: 'center',
    flex: 1,
  },
  rightPlaceholder: {
    width: 40, // keeps title centered
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default Header;
