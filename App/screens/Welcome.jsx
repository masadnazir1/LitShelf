import { StyleSheet, View } from 'react-native';
import Button from '../components/Shared/Button';
import Container from '../components/Shared/UniversalContainer';
import colorTheme from '../Theme/Colors';
import typography from '../Theme/Typography';
import spacing from '../Theme/Spacing';
import { useNavigation } from '@react-navigation/native';
import ShowText from '../components/Shared/Text';

const Welcome = () => {
  const Navigate = useNavigation();

  const NavigateToHome = () => {
    Navigate.navigate('Main');
  };
  return (
    <>
      <Container style={style.Container}>
        <ShowText
          weight={typography.fontWeights.bold}
          color={colorTheme.accent[400]}
          size={typography.fontSizes.lg}
          align="left"
        >
          Welcome !
        </ShowText>
        <View
          style={{
            marginVertical: spacing.lg,
            gap: spacing.lg,
          }}
        >
          <ShowText
            align="left"
            size={typography.fontSizes.title}
            color={colorTheme.primary[400]}
            lineHeight={typography.lineHeights.lg}
            letterSpacing={typography.letterSpacing.md}
          >
            Find what
          </ShowText>
          <ShowText
            align="left"
            size={typography.fontSizes.title}
            color={colorTheme.primary[400]}
            lineHeight={typography.lineHeights.lg}
            letterSpacing={typography.letterSpacing.md}
          >
            you are
          </ShowText>
          <ShowText
            align="left"
            size={typography.fontSizes.title}
            color={colorTheme.primary[400]}
            lineHeight={typography.lineHeights.lg}
            letterSpacing={typography.letterSpacing.md}
          >
            looking for
          </ShowText>
        </View>
        <View
          style={{
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            marginVertical: 10,
          }}
        >
          <ShowText
            align="left"
            size={typography.fontSizes.lg}
            color={colorTheme.blackAndWhite.black}
            lineHeight={typography.lineHeights.lg}
          >
            By personalize your account, we can help you to find what you like.
          </ShowText>
        </View>

        <Button
          variant="flat"
          label="Personalize Your Account"
          style={{ width: '100%' }}
          onPress={() => Navigate.navigate('Personalize')}
        />
        <Button
          variant="outline"
          label="Skip"
          style={{ width: '100%' }}
          onPress={() => console.log(true)}
        />
      </Container>
    </>
  );
};

export default Welcome;

const style = StyleSheet.create({
  Container: {
    gap: spacing.lg,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
