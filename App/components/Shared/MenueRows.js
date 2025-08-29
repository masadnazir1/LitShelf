import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ShowText from './Text';
import spacing from '../../Theme/Spacing';

const MenueRows = ({ title, onMenuePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuePress} style={styles.MenueRowsButton}>
        <ShowText align="left" letterSpacing={0}>
          {title}
        </ShowText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  title: {},
  MenueRowsButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: spacing.lg,
    backgroundColor: '#fff',
    borderRadius: spacing.xs,
  },
});

export default MenueRows;
