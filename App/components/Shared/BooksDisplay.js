import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

const fallbackImage = 'https://via.placeholder.com/120x180.png?text=No+Image';

const BooksDisplay = ({
  title,
  data = [],
  onSeeMorePress,
  onItemPress,
  renderItem,
  itemKey = 'id',
}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      {title && (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {onSeeMorePress && (
            <TouchableOpacity
              onPress={onSeeMorePress}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityLabel={`See more ${title}`}
            >
              <Text style={styles.seeMore}>See more</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Items */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      >
        {data.map(item => (
          <TouchableOpacity
            key={item[itemKey]}
            style={styles.itemContainer}
            onPress={() => onItemPress?.(item)}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel={`Open details for ${item.title || 'item'}`}
          >
            {renderItem ? (
              renderItem(item)
            ) : (
              <>
                <Image
                  source={{ uri: item.imageUrl || fallbackImage }}
                  defaultSource={{ uri: fallbackImage }}
                  style={styles.image}
                  resizeMode="cover"
                />
                {item.title && (
                  <Text style={styles.itemTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                )}
              </>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

BooksDisplay.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
  onSeeMorePress: PropTypes.func,
  onItemPress: PropTypes.func,
  renderItem: PropTypes.func, // custom render
  itemKey: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  seeMore: {
    fontSize: 14,
    color: '#4B39EF',
    fontWeight: '500',
  },
  listContainer: {
    flexDirection: 'row',
    paddingRight: 12,
  },
  itemContainer: {
    marginRight: 12,
    alignItems: 'center',
    width: 120,
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    marginBottom: 6,
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#444',
    textAlign: 'center',
  },
});

export default BooksDisplay;
