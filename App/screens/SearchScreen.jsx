import { Alert, StyleSheet, View } from 'react-native';
import spacing from '../Theme/Spacing';
import Container from '../components/Shared/UniversalContainer';
import NavbarInternal from '../components/Shared/NavbarInternal';
import ShowText from '../components/Shared/Text';
import typography from '../Theme/Typography';
import InputText from '../components/Shared/InputText';
import RecommendedCategories from '../components/GeneralUI/RecommendedCategories';
import BooksDisplay from '../components/Shared/BooksDisplay';
import { useNavigation } from '@react-navigation/native';
import { books } from '../Data/Books';

const SearchScreen = () => {
  const navigation = useNavigation();
  const handleSeeMore = () => {
    Alert.alert('Navigate to all books');
  };
  const handleBookPress = () => {
    navigation.navigate('BasicDetail');
  };
  return (
    <>
      <NavbarInternal />
      <Container style={styles.container}>
        <View style={{ gap: spacing.sm }}>
          <ShowText
            align="left"
            size={typography.fontSizes.lg}
            weight={typography.fontWeights.bold}
          >
            Explore
          </ShowText>
          <InputText placeholder="Search Books or Author..." inputType="text" />

          <RecommendedCategories />

          <BooksDisplay
            title="Recommended Books"
            data={books}
            onSeeMorePress={handleSeeMore}
            onItemPress={handleBookPress}
          />
        </View>
      </Container>
    </>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: spacing.xl,
  },
  section: {
    marginBottom: spacing.lg,
  },
});
