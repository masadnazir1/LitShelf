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
import ConfirmationDialog from '../components/Shared/ConfirmationDialog';
import ImageComponent from '../components/Shared/ImageComponent';
import LinkButton from '../components/Shared/LinkButton';

const EmailConfirm = () => {
  const Navigate = useNavigation();
  const [visible, setVisible] = useState(false);

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
          Confrimation Code
        </ShowText>

        <ShowText align="left">
          enter the verification code we sent to{' '}
          <ShowText weight={typography.fontWeights.bold} align="left">
            asad@example.com
          </ShowText>
        </ShowText>

        <InputText placeholder="Verification Code" inputType="number" />
        <View
          style={{ alignContent: 'flex-start', justifyContent: 'flex-start' }}
        >
          <Text style={{ textAlign: 'left' }}>
            Didn't receive the code?{' '}
            <LinkButton label="Resend" color={colorTheme.accent[400]} />
          </Text>
        </View>

        <Button
          variant="flat"
          label="Submit"
          style={{ width: '100%' }}
          onPress={() => Navigate.navigate('ForgotPassword')}
        />
        <Button
          variant="outline"
          label="Cancel"
          style={{ width: '100%' }}
          onPress={() => setVisible(true)}
        />

        <ConfirmationDialog
          visible={visible}
          title="Are sure want to cancel?"
          description="This will cancel the verification procecc."
          confirmText="Delete"
          cancelText="Cancel"
          onCancel={() => setVisible(false)}
          onConfirm={() => {
            NavigateToHome();
            setVisible(false);
          }}
        />
      </Container>
    </>
  );
};

export default EmailConfirm;

const style = StyleSheet.create({
  Container: {
    gap: spacing.lg,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
