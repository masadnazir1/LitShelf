import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Using Ionicons for back arrow and menu dots

const DetailsHeader = ({ title, onBackPress, onMenuPress }) => {
  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="#4B39EF" />
      </TouchableOpacity>

      {/* Book Title */}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      {/* Menu button */}
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <Ionicons name="ellipsis-horizontal" size={24} color="#4B39EF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#E5E5F0',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4B39EF',
    textAlign: 'center',
    flex: 1,
  },
  menuButton: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default DetailsHeader;
