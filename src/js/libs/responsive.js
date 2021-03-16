import {Dimensions, PixelRatio} from 'react-native';

const responsiveWidth = width => {
  return PixelRatio.roundToNearestPixel(
    (Dimensions.get('window').width * width) / 411.428,
  );
};

const responsiveHeight = height => {
  return PixelRatio.roundToNearestPixel(
    (Dimensions.get('window').height * height) / 683.428,
  );
};

const responsiveFontSize = fontSize => {
  return PixelRatio.roundToNearestPixel(
    (Dimensions.get('window').width * fontSize) / 411.428,
  );
};

export {responsiveWidth, responsiveHeight, responsiveFontSize};
