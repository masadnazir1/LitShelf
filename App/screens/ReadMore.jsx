import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Container from '../components/Shared/UniversalContainer';
import DetailsHeader from '../components/Shared/DetailsHeader';
import BookProgressBar from '../components/Shared/BookProgressBar';
import BookReader from '../components/Shared/BookReader';

import spacing from '../Theme/Spacing';
import { useNavigation } from '@react-navigation/native';
import bookContent from '../Data/BookReadcontent';

const ReadMore = () => {
  const Navigate = useNavigation();
  const [currentPage, setCurrentPage] = useState(7);

  const [bookmarked, setBookmarked] = useState(false);

  return (
    <>
      <DetailsHeader onBackPress={() => Navigate.goBack()} />
      <Container style={style.Container}>
        <BookReader content={bookContent} onProgressChange={setCurrentPage} />
      </Container>
      <BookProgressBar
        currentPage={currentPage}
        totalPages={bookContent.length}
        bookmarked={bookmarked}
        onToggleBookmark={() => setBookmarked(!bookmarked)}
      />
    </>
  );
};

export default ReadMore;

const style = StyleSheet.create({
  Container: {
    gap: spacing.lg,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
