import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Typography, Colors } from '../../Theme';

const ShowText = ({
  children,
  color = Colors.neutral[900],
  size = Typography.fontSizes.md,
  letterSpacing = Typography.letterSpacing.xs,
  weight = Typography.fontWeights.regular,
  align = 'center', // left | center | right | justify
  numberOfLines = null,
  containerStyle = {},
  style = {},
  lineHeight = Typography.lineHeights.md,
  transform = 'none', // 'none' | 'uppercase' | 'capitalize' | 'lowercase'
}) => {
  return (
    <View
      style={[
        styles.container,
        align === 'center'
          ? styles.center
          : align === 'left'
          ? styles.left
          : styles.right,
        containerStyle,
      ]}
    >
      <Text
        numberOfLines={numberOfLines}
        style={[
          {
            color,
            fontSize: size,
            fontWeight: weight,
            textAlign: align,
            lineHeight,
            textTransform: transform,
            letterSpacing: letterSpacing,
          },
          style,
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default ShowText;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  center: {
    alignItems: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
});
