import { View, StyleSheet, Alert, FlatList } from 'react-native';
import Button from '../components/Shared/Button';
import spacing from '../Theme/Spacing';
import { IconNames } from '../Theme';
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Shared/UniversalContainer';
import NavbarInternal from '../components/Shared/NavbarInternal';
import CategoriesList from '../components/GeneralUI/CategoriesList';
import RecommendedBooks from '../components/GeneralUI/RecommendedBooks';
import PopularBooks from '../components/GeneralUI/PopularBooks';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSeeMore = () => {
    Alert.alert('Navigate to all recommended books');
  };

  // Sections for FlatList
  const sections = [
    { key: 'categories', render: () => <CategoriesList /> },
    {
      key: 'recommended',
      render: () => <RecommendedBooks onSeeMorePress={handleSeeMore} />,
    },
    {
      key: 'popular',
      render: () => <PopularBooks onSeeMorePress={handleSeeMore} />,
    },
    {
      key: 'bookscategories',
      render: () => <PopularBooks onSeeMorePress={handleSeeMore} />,
    },
    {
      key: 'login',
      render: () => (
        <Button
          variant="flat"
          label="Go to Login"
          type="icon-left"
          icon={IconNames.arrowRight}
          style={{ width: '100%' }}
          onPress={() => navigation.navigate('Login')}
        />
      ),
    },
    {
      key: 'error',
      render: () => (
        <Button
          variant="outline"
          label="Error Page"
          type="icon-left"
          icon={IconNames.arrowRight}
          style={{ width: '100%' }}
          onPress={() => navigation.navigate('ErrorPage')}
        />
      ),
    },
  ];

  return (
    <>
      <NavbarInternal />
      <Container style={{ flex: 1 }}>
        <FlatList
          data={sections}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <View style={styles.section}>{item.render()}</View>
          )}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: spacing.xl,
  },
  section: {
    marginBottom: spacing.lg,
  },
});
