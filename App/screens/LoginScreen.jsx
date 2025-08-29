import { IconNames } from '../Theme';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Shared/Button';
import Container from '../components/Shared/UniversalContainer';
import colorTheme from '../Theme/Colors';
import typography from '../Theme/Typography';
import spacing from '../Theme/Spacing';
import { useNavigation } from '@react-navigation/native';
import InputText from '../components/Shared/InputText';
import Checkbox from '../components/Shared/Checkbox';
import ShowText from '../components/Shared/Text';
import ImageComponent from '../components/Shared/ImageComponent';
import LinkButton from '../components/Shared/LinkButton';

const LoginScreen = () => {
  const Navigate = useNavigation();

  const NavigateToWelcome = () => {
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
          Login to continue
        </ShowText>
        <InputText placeholder="Email Address" inputType="email" />
        <InputText placeholder="Strong Password" inputType="password" />

        <Checkbox label="Remember me" checked={true} />
        <Button
          variant="flat"
          label="Login"
          style={{ width: '100%' }}
          onPress={() => NavigateToWelcome()}
        />
        <Button
          variant="ghost"
          label="Forgot Password?"
          style={{
            width: '100%',
          }}
          align="right"
          colorType="danger"
        />
        <ShowText
          weight={typography.fontWeights.bold}
          align="center"
          color={colorTheme.neutral[400]}
        >
          or login with
        </ShowText>
        <View>
          <Button
            variant="outline"
            icon={IconNames.google}
            label="Continue With Google"
            style={{
              width: '100%',
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Text color={colorTheme.neutral[400]}>Don't have account?</Text>
          <LinkButton
            label="Register"
            color={colorTheme.accent[400]}
            onPress={() => Navigate.navigate('SignUp')}
          />
        </View>
      </Container>
    </>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  Container: {
    gap: spacing.md,
  },
});
