import { StyleSheet } from 'react-native';
import Button from '../components/Shared/Button';
import Container from '../components/Shared/UniversalContainer';
import typography from '../Theme/Typography';
import spacing from '../Theme/Spacing';
import { useNavigation } from '@react-navigation/native';
import { IconNames } from '../Theme';
import ShowText from '../components/Shared/Text';
import ImageComponent from '../components/Shared/ImageComponent';
import Header from '../components/Shared/GeneralNavbar';

const ErrorPage = () => {
  const navigation = useNavigation();

  const handleRetry = () => {
    navigation.goBack();
  };

  return (
    <>
      <Header title="Error" onBackPress={() => navigation.goBack()} />

      <Container style={styles.container}>
        <ImageComponent
          resizeMode="contain"
          source={require('../Assets/error.png')}
          style={styles.image}
        />

        <ShowText
          weight={typography.fontWeights.bold}
          size={typography.fontSizes.lg}
          align="center"
        >
          Oops! Something Went Wrong
        </ShowText>

        <ShowText align="center" style={styles.subText}>
          Please check your internet connection and try again
        </ShowText>

        <Button
          variant="flat"
          label="Retry"
          style={styles.retryButton}
          onPress={handleRetry}
          icon={IconNames.arrowRight}
        />
      </Container>
    </>
  );
};

export default ErrorPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.lg,
  },
  image: {
    height: 200,
    width: 200,
  },
  subText: {
    color: '#666',
  },
  retryButton: {
    width: '100%',
  },
});
