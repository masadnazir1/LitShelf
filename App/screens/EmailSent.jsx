import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Shared/Button';
import Container from '../components/Shared/UniversalContainer';
import typography from '../Theme/Typography';
import spacing from '../Theme/Spacing';
import { useNavigation } from '@react-navigation/native';
import ShowText from '../components/Shared/Text';
import ImageComponent from '../components/Shared/ImageComponent';

const EmailSent = () => {
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
          Email Sent
        </ShowText>

        <ShowText align="left">
          We sent an email to y***@mail.com with a link to get back into your
          account.
        </ShowText>

        <Button
          variant="outline"
          label="Close"
          style={{ width: '100%' }}
          onPress={() => Navigate.navigate('Main')}
        />
      </Container>
    </>
  );
};

export default EmailSent;

const style = StyleSheet.create({
  Container: {
    gap: spacing.lg,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
