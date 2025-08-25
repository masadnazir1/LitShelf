// components/Shared/Checkbox.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, Typography, Spacing } from '../../Theme';

const Checkbox = ({
  checked,
  label,
  onToggle,
  disabled = false,
  indeterminate = false,
}) => {
  const iconName = indeterminate
    ? 'remove-outline'
    : checked
    ? 'checkmark-outline'
    : '';

  const iconBgColor = disabled
    ? Colors.neutral[100]
    : checked || indeterminate
    ? Colors.primary[600]
    : Colors.blackAndWhite.white;

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onToggle}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.checkbox,
          { backgroundColor: iconBgColor, borderColor: Colors.primary[600] },
        ]}
      >
        {iconName !== '' && (
          <Ionicons
            name={iconName}
            size={16}
            color={Colors.blackAndWhite.white}
          />
        )}
      </View>
      {label && (
        <Text
          style={[
            styles.label,
            { color: disabled ? Colors.neutral[400] : Colors.neutral[900] },
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.xs,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.sm,
  },
  label: {
    fontSize: Typography.fontSizes.sm,
  },
});
