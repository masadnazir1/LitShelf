import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Shared/Button';
import Container from '../components/Shared/UniversalContainer';
import colorTheme from '../Theme/Colors';
import typography from '../Theme/Typography';
import spacing from '../Theme/Spacing';
import { useNavigation } from '@react-navigation/native';
import InputText from '../components/Shared/InputText';
import ShowText from '../components/Shared/Text';
import ImageComponent from '../components/Shared/ImageComponent';
import LinkButton from '../components/Shared/LinkButton';

const SignUpScreen = () => {
  const Navigate = useNavigation();

  const NavigateToHome = () => {
    Navigate.navigate('Main');
  };
  return (
    <>
      <Container style={style.Container}>
        <ImageComponent
          resizeMode="contain"
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/flat-illustrations-1/550/Mobile_Audiobook-512.png',
          }}
          borderRadius={12}
        />
        <ShowText
          weight={typography.fontWeights.bold}
          size={typography.fontSizes.lg}
          align="left"
        >
          Register
        </ShowText>

        <InputText placeholder="Email Address" />
        <InputText placeholder="Strong Password" />
        <InputText inputType="date" placeholder="Select date of birth" />

        <Text style={{ textAlign: 'center' }}>
          by signing up you agree to{' '}
          <LinkButton
            label="terms & conditions"
            color={colorTheme.accent[400]}
          />{' '}
          and{' '}
          <LinkButton label="privacy policy" color={colorTheme.accent[400]} />
        </Text>

        <Button
          variant="flat"
          label="Register"
          style={{ width: '100%' }}
          onPress={() => Navigate.navigate('EmailConfirm')}
        />
        <Button
          variant="outline"
          label="Cancel"
          style={{ width: '100%' }}
          onPress={() => console.log(true)}
        />
      </Container>
    </>
  );
};

export default SignUpScreen;

const style = StyleSheet.create({
  Container: {
    gap: spacing.lg,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
