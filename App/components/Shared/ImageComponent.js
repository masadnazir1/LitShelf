import React from 'react';
import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import colorTheme from '../../Theme/Colors';

const ImageComponent = ({
  source,
  resizeMode = 'cover',
  style,
  fallback = null,
  borderRadius = 8,
  loader = true,
  width = '100%',
  height = 200,
}) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  return (
    <View style={[styles.wrapper, { width, height, borderRadius }, style]}>
      {loading && loader && !error && (
        <ActivityIndicator
          style={StyleSheet.absoluteFill}
          size="small"
          color={colorTheme.primary[600]}
        />
      )}

      {!error ? (
        <Image
          source={source}
          resizeMode={resizeMode}
          style={[styles.image, { borderRadius }]}
          onLoadEnd={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
        />
      ) : fallback ? (
        fallback
      ) : (
        <View style={[styles.fallback, { borderRadius }]}>
          {/* Optional: Fallback Icon or Text */}
        </View>
      )}
    </View>
  );
};

export default ImageComponent;

ImageComponent.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({ uri: PropTypes.string }),
    PropTypes.number,
  ]).isRequired,
  resizeMode: PropTypes.string,
  style: PropTypes.any,
  fallback: PropTypes.node,
  borderRadius: PropTypes.number,
  loader: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  fallback: {
    flex: 1,
    backgroundColor: colorTheme.neutral[200],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
