import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';

import { Colors, Spacing } from '../../Theme';

const Container = ({
  children,
  scrollable = false,
  withKeyboardAvoiding = false,
  backgroundColor = Colors.blackAndWhite.white,
  backgroundImage = null, // <-- NEW PROP
  padding = Spacing.md,
  statusBar = 'dark-content',
  style = {},
  contentContainerStyle = {},
  imageStyle = {}, // <-- allow passing styles for background image
}) => {
  const Wrapper = scrollable ? ScrollView : View;

  const innerContent = (
    <Wrapper
      style={[
        styles.container,
        {
          paddingHorizontal: padding,
          backgroundColor: backgroundImage ? 'transparent' : backgroundColor,
        },
        style,
      ]}
      contentContainerStyle={scrollable ? contentContainerStyle : null}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </Wrapper>
  );

  const ContentWithKB = withKeyboardAvoiding ? (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      {innerContent}
    </KeyboardAvoidingView>
  ) : (
    innerContent
  );

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <StatusBar barStyle={statusBar} />

      {backgroundImage ? (
        <ImageBackground
          source={backgroundImage}
          style={styles.imageBackground}
          imageStyle={[styles.imageStyle, imageStyle]}
        >
          {ContentWithKB}
        </ImageBackground>
      ) : (
        ContentWithKB
      )}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  imageStyle: {
    resizeMode: 'stretch',
  },
});
