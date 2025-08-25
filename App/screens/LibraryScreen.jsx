import { View, StyleSheet, FlatList, Alert } from 'react-native';
import InputText from '../components/Shared/InputText';
import ShowText from '../components/Shared/Text';
import spacing from '../Theme/Spacing';
import NavbarInternal from '../components/Shared/NavbarInternal';
import typography from '../Theme/Typography';
import Container from '../components/Shared/UniversalContainer';
import BooksDisplay from '../components/Shared/BooksDisplay';
import { books } from '../Data/Books';
import { booksList } from '../Data/LibBooks';
import BookListItem from '../components/GeneralUI/BookListItem';
import { useNavigation } from '@react-navigation/native';

const LibraryScreen = () => {
  const navigation = useNavigation();

  const handleSeeMore = () => {
    Alert.alert('Navigate to all books');
  };

  const handleBookPress = title => {
    navigation.navigate('BasicDetail', { title });
  };

  return (
    <>
      <NavbarInternal />
      <Container>
        <View style={{ gap: spacing.sm }}>
          {/* Fixed Header Section */}
          <ShowText
            align="left"
            size={typography.fontSizes.lg}
            weight={typography.fontWeights.bold}
          >
            Explore
          </ShowText>

          <InputText placeholder="Search Books or Author..." inputType="text" />

          {/* Scrollable Books Section */}
          <FlatList
            data={booksList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <BookListItem
                bookCover={item.bookCover}
                title={item.title}
                author={item.author}
                onPress={() => handleBookPress(item.title)}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: spacing.lg }}
            style={{ marginTop: spacing.sm }} // adjust height as needed
          />
        </View>
      </Container>
    </>
  );
};

export default LibraryScreen;

const style = StyleSheet.create({
  Container: {
    gap: spacing.lg,
  },
  Button: {
    width: '50%',
  },
});
