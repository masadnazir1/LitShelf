import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colorTheme from '../../Theme/Colors';
import spacing from '../../Theme/Spacing';

const Button = ({
  label = '',
  icon = null,
  variant = 'flat', // flat | outline | ghost
  type = 'text', // text | icon-left | icon-only | icon-right
  disabled = false,
  onPress,
  style = {},
  iconSize = 18,
  paddingVertical = spacing.md,
  iconColor,
  colorType = 'primary', // primary | danger | success | warning | info
  align = 'center', // NEW: left | center | right
}) => {
  const styles = getStyles({
    variant,
    type,
    disabled,
    colorType,
    align,
    paddingVertical,
  });

  const renderContent = () => {
    const iconElement = icon ? (
      <Ionicons
        name={icon}
        size={iconSize}
        color={disabled ? styles.text.color : iconColor || styles.text.color}
        style={
          type === 'icon-left'
            ? styles.iconLeft
            : type === 'icon-right'
            ? styles.iconRight
            : null
        }
      />
    ) : null;

    const textElement =
      type !== 'icon-only' ? <Text style={styles.text}>{label}</Text> : null;

    return (
      <View style={styles.content}>
        {type === 'icon-left' && iconElement}
        {textElement}
        {type === 'icon-only' && iconElement}
        {type === 'icon-right' && (
          <>
            {textElement}
            {iconElement}
          </>
        )}
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

export default Button;

const getStyles = ({
  variant,
  type,
  disabled,
  colorType,
  align,
  paddingVertical,
}) => {
  const theme = colorTheme;

  const baseColors = {
    primary: theme.primary[600],
    danger: theme.accent[600],
    success: '#22C55E',
    warning: '#F59E0B',
    info: '#3B82F6',
  };

  const bgColor = baseColors[colorType] || theme.primary[600];
  const textColor = theme.blackAndWhite.white;
  const disabledBg = theme.neutral[200];
  const disabledText = theme.neutral[400];

  const justifyMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  const common = {
    button: {
      paddingVertical,
      paddingHorizontal: type === 'icon-only' ? 10 : 16,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: justifyMap[align] || 'center',
      minWidth: type === 'icon-only' ? 40 : 80,
    },
    text: {
      fontSize: 14,
      fontWeight: '500',
    },
    iconLeft: {
      marginRight: 8,
    },
    iconRight: {
      marginLeft: 8,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  };

  const variants = {
    flat: {
      button: {
        backgroundColor: disabled ? disabledBg : bgColor,
      },
      text: {
        color: disabled ? disabledText : textColor,
      },
    },
    outline: {
      button: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: disabled ? disabledBg : bgColor,
      },
      text: {
        color: disabled ? disabledText : bgColor,
      },
    },
    ghost: {
      button: {
        backgroundColor: 'transparent',
      },
      text: {
        color: disabled ? disabledText : bgColor,
      },
    },
  };

  return {
    button: {
      ...common.button,
      ...variants[variant].button,
    },
    text: {
      ...common.text,
      ...variants[variant].text,
    },
    iconLeft: common.iconLeft,
    iconRight: common.iconRight,
    content: common.content,
  };
};
