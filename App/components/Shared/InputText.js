// components/Shared/Input.js
import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Pressable,
  Platform,
  Text,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors, Typography, Spacing } from '../../Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputText = ({
  value,
  onChange,
  placeholder = 'Enter text',
  editable = true,
  readOnly = false,
  style,
  inputType = 'text', // text | number | email | password | date
  keyboardType,
  borderWidth = 0,
  showIcon = true,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      onChange?.(selectedDate.toISOString().split('T')[0]);
    }
  };

  const getKeyboardType = () => {
    if (keyboardType) return keyboardType;

    switch (inputType) {
      case 'email':
        return 'email-address';
      case 'number':
        return 'numeric';
      default:
        return 'default';
    }
  };

  const renderIcon = () => {
    if (!showIcon) return null;

    let iconName = '';
    let onPress = null;

    if (inputType === 'password') {
      iconName = isPasswordVisible ? 'eye-off' : 'eye';
      onPress = () => setIsPasswordVisible(!isPasswordVisible);
    }

    if (inputType === 'date') {
      iconName = 'calendar-outline';
      onPress = () => setShowDatePicker(true);
    }

    if (!iconName) return null;

    return (
      <Pressable onPress={onPress} style={styles.iconWrapper}>
        <Ionicons name={iconName} size={20} color={Colors.neutral[500]} />
      </Pressable>
    );
  };

  const renderDateInput = () => (
    <>
      <Pressable
        style={[styles.inputWrapper, !editable && styles.disabled]}
        onPress={() => setShowDatePicker(true)}
        disabled={!editable || readOnly}
      >
        <Text style={[styles.input, !value && styles.placeholder]}>
          {value || placeholder}
        </Text>
        {renderIcon()}
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}
    </>
  );

  return inputType === 'date' ? (
    renderDateInput()
  ) : (
    <View style={[styles.inputWrapper, !editable && styles.disabled]}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor={Colors.neutral[400]}
        value={value}
        onChangeText={onChange}
        editable={editable && !readOnly}
        keyboardType={getKeyboardType()}
        secureTextEntry={inputType === 'password' && !isPasswordVisible}
      />
      {renderIcon()}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputWrapper: {
    borderRadius: 8,
    paddingHorizontal: Spacing.md,
    paddingVertical: Platform.OS === 'ios' ? Spacing.md : Spacing.sm,
    backgroundColor: Colors.neutral[100],
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    fontSize: Typography.fontSizes.md,
    color: Colors.neutral[900],
    paddingRight: 36, // reserve space for icon
  },
  placeholder: {
    color: Colors.neutral[400],
  },
  disabled: {
    backgroundColor: Colors.neutral[100],
    borderColor: Colors.neutral[200],
  },
  iconWrapper: {
    position: 'absolute',
    right: Spacing.md,
    top: '50%',
    transform: [{ translateY: -10 }],
    padding: 4,
    zIndex: 10,
  },
});
