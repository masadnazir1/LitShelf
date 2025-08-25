import { Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

const DimensionsUtil = {
  windowWidth: width,
  windowHeight: height,

  // Scaling helpers
  scale, // scale horizontally
  verticalScale, // scale vertically
  moderateScale, // scale with factor (defaults to 0.5)

  // Percentage helpers
  wp: percent => (width * percent) / 100,
  hp: percent => (height * percent) / 100,

  // Breakpoints (optional)
  breakpoints: {
    small: 320,
    medium: 375,
    large: 414,
  },

  isSmallDevice: width < 360,
};

export default DimensionsUtil;
