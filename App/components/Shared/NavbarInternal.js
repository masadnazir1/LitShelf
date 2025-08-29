import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colorTheme from '../../Theme/Colors';
import typography from '../../Theme/Typography';
import spacing from '../../Theme/Spacing';
import { useNavigation } from '@react-navigation/native';

const NavbarInternal = ({ onSettingsPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Left Icon (Circle + Dot) */}
        <View style={styles.outerCircle}>
          <View style={styles.innerDot} />
        </View>

        {/* Title */}
        <Text style={styles.title}>
          <Text style={styles.titleBold}>Audi</Text>
          <Text style={styles.titleRegular}>Books</Text>
          <Text style={styles.titleDot}>.</Text>
        </Text>
      </View>

      {/* Settings Icon */}
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Ionicons
          name="settings-outline"
          size={24}
          color={colorTheme.primary[600]}
        />
      </TouchableOpacity>
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
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colorTheme.primary[600],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  innerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colorTheme.accent[500],
  },
  title: {
    fontSize: typography.fontSizes.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleBold: {
    fontWeight: typography.fontWeights.bold,
    color: colorTheme.primary[600],
  },
  titleRegular: {
    color: colorTheme.primary[600],
    fontWeight: typography.fontWeights.regular,
  },
  titleDot: {
    color: colorTheme.accent[500],
    fontWeight: typography.fontWeights.bold,
  },
});

export default NavbarInternal;
