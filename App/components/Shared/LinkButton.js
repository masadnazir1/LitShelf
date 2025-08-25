import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Typography, Colors } from '../../Theme';

const LinkButton = ({
  label,
  onPress,
  disabled = false,
  color = Colors.primary[600],
  fontSize = Typography.fontSizes.md,
  fontWeight = Typography.fontWeights.medium,
  textTransform = 'none', // 'uppercase' | 'capitalize' | 'none'
  style = {},
}) => {
  return (
    <Text
      onPress={disabled ? null : onPress}
      style={[
        styles.link,
        {
          color: disabled ? Colors.neutral[400] : color,
          fontSize,
          fontWeight,
          textTransform,
        },
        style,
      ]}
      disabled={disabled}
    >
      {label}
    </Text>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
  },
});
