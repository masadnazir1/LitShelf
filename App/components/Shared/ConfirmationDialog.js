import React from 'react';
import { Modal, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Colors, Typography, Spacing } from '../../Theme';
import Button from './Button';

const { width, height } = Dimensions.get('window');

const ConfirmationDialog = ({
  visible,
  title = 'Are you sure?',
  description = '',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  disabled = false,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <Text style={styles.title}>{title}</Text>
          {description !== '' && (
            <Text style={styles.description}>{description}</Text>
          )}
          <View style={styles.actions}>
            <Button
              label={cancelText}
              onPress={onCancel}
              disabled={disabled}
              variant="outline"
              style={styles.actionBtn}
            />
            <Button
              label={confirmText}
              onPress={onConfirm}
              disabled={disabled}
              variant="flat"
              style={styles.actionBtn}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationDialog;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    width: width * 0.95,
    backgroundColor: Colors.blackAndWhite.white,
    borderRadius: 12,
    padding: Spacing.lg,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    position: 'absolute',
    bottom: height * 0.01,
  },
  title: {
    fontSize: Typography.fontSizes.xl,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.neutral[900],
    marginBottom: Spacing.sm,
  },
  description: {
    fontSize: Typography.fontSizes.md,
    color: Colors.neutral[600],
    marginBottom: Spacing.lg,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: Spacing.sm,
  },
  actionBtn: {
    minWidth: 100,
  },
});
