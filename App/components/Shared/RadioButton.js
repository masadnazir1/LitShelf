// components/Shared/RadioButton.js
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '../../Theme';

const RadioButton = ({ selected, onSelect, label, disabled = false }) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onSelect}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.radioOuter,
          {
            borderColor: selected ? Colors.primary[600] : Colors.neutral[400],
          },
        ]}
      >
        {selected && <View style={styles.radioInner} />}
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

export default RadioButton;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.xs,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.sm,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary[600],
  },
  label: {
    fontSize: Typography.fontSizes.sm,
  },
});
