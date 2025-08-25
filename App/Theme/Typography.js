import { scale, verticalScale } from 'react-native-size-matters';

const typography = {
  fontSizes: {
    xs: scale(10),
    sm: scale(12),
    md: scale(14),
    lg: scale(16),
    xl: scale(20),
    xxl: scale(24),
    title: scale(32),
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  lineHeights: {
    sm: verticalScale(16),
    md: verticalScale(20),
    lg: verticalScale(24),
    xl: verticalScale(32),
  },
  letterSpacing: {
    xs: verticalScale(0),
    sm: verticalScale(5),
    md: verticalScale(10),
    lg: verticalScale(15),
    xl: verticalScale(20),
  },
};

export default typography;
