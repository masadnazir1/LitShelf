import { StyleSheet, View, Text, FlatList } from 'react-native';

import Container from '../components/Shared/UniversalContainer';
import { IconNames } from '../Theme';
import Button from '../components/Shared/Button';
import typography from '../Theme/Typography';
import colorTheme from '../Theme/Colors';
import spacing from '../Theme/Spacing';
import { useNavigation } from '@react-navigation/native';
import ShowText from '../components/Shared/Text';
import DetailsHeader from '../components/Shared/DetailsHeader';
import BookCard from '../components/Shared/BookCard';
import { usePlayer } from '../contexts/PlayerContext';

const BasicDetail = () => {
  const Navigate = useNavigation();
  const { playTrack } = usePlayer();

  //
  const play = () => {
    playTrack({
      id: 'kalimba',
      title: 'Kalimba Sample',
      artist: 'This is the artist',
      coverImage: 'https://covers.openlibrary.org/b/id/8370661-L.jpg',
      url: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    });
  };
  const handleBookPress = () => {
    console.log('Navigate to Book Details');
  };

  const Data = [
    {
      id: 1,
      type: 'Bookcard',
    },
    {
      id: 2,
      type: 'buttongroup',
    },
    { id: 3, type: 'summary' },
  ];

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'Bookcard':
        return (
          <BookCard
            bookCover="https://covers.openlibrary.org/b/id/8370661-L.jpg" // Replace with actual cover image URL
            title="Harry Potter and the Sorcerer's Stone"
            author="J.K. Rowling"
            rating={4} // Rating between 1 and 5
            categories={['Fantasy', 'Drama', 'Fiction']}
            onPress={handleBookPress}
          />
        );

      case 'buttongroup':
        return (
          <View style={{ gap: spacing.sm, flexDirection: 'row-reverse' }}>
            <Button
              variant="outline"
              icon={IconNames.book}
              iconColor={colorTheme.neutral[900]}
              type="icon-left"
              label="Read Book"
              style={style.Button}
              onPress={() => Navigate.navigate('ReadMore')}
            />
            <Button
              icon={IconNames.play}
              type="icon-left"
              label="Play Audio"
              style={style.Button}
              onPress={play}
            />
          </View>
        );

      case 'summary':
        return (
          <View>
            <ShowText align="left" weight={typography.fontWeights.bold}>
              Summary
            </ShowText>
            <ShowText
              align="left"
              weight={typography.fontWeights.medium}
              color={colorTheme.neutral[900]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio accusantium modi veniam in hic perferendis perspiciatis
              molestias soluta at nesciunt quam excepturi odit illo, animi
              obcaecati fugiat ratione laudantium iste. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Distinctio accusantium modi
              veniam in hic perferendis perspiciatis molestias soluta at
              nesciunt quam excepturi odit illo, animi obcaecati fugiat ratione
              laudantium iste.
            </ShowText>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <DetailsHeader
        title="Harry Potter and the Sorcerer's Stone"
        onBackPress={() => Navigate.goBack()}
      />
      <Container style={style.Container}>
        <FlatList
          data={Data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={style.Container}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </>
  );
};

export default BasicDetail;

const style = StyleSheet.create({
  Container: {
    gap: spacing.lg,
  },
  Button: {
    width: '50%',
  },
});
