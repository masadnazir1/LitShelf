import { StyleSheet } from 'react-native';
import Button from '../components/Shared/Button';
import Container from '../components/Shared/UniversalContainer';
import typography from '../Theme/Typography';
import spacing from '../Theme/Spacing';
import { useNavigation } from '@react-navigation/native';
import ShowText from '../components/Shared/Text';
import ImageComponent from '../components/Shared/ImageComponent';

const Congratulation = () => {
  const Navigate = useNavigation();

  const NavigateToHome = () => {
    Navigate.navigate('Main');
  };
  return (
    <>
      <Container style={style.Container}>
        <ImageComponent
          resizeMode="contain"
          source={require('../Assets/congrats.png')}
          borderRadius={12}
        />
        <ShowText
          weight={typography.fontWeights.bold}
          size={typography.fontSizes.lg}
          align="center"
        >
          You are ready to go!
        </ShowText>

        <ShowText align="center">
          Congratulation, any interesting topics will be shortly in your hands.
        </ShowText>

        <Button
          variant="flat"
          label="Close"
          style={{ width: '100%' }}
          onPress={() => Navigate.navigate('Main')}
        />
      </Container>
    </>
  );
};

export default Congratulation;

const style = StyleSheet.create({
  Container: {
    gap: spacing.lg,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
