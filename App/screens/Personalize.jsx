import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import InputText from '../components/Shared/InputText';
import Button from '../components/Shared/Button';
import Container from '../components/Shared/UniversalContainer';
import colorTheme from '../Theme/Colors';
import typography from '../Theme/Typography';
import spacing from '../Theme/Spacing';
import { useNavigation } from '@react-navigation/native';
import ShowText from '../components/Shared/Text';

const categories = [
  'Art',
  'Business',
  'Biography',
  'Comedy',
  'Culture',
  'Education',
  'News',
  'Philosophy',
  'Psychology',
  'Technology',
  'Travel',
];

const Personalize = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);

  const toggleCategory = cat => {
    if (selected.includes(cat)) {
      setSelected(selected.filter(item => item !== cat));
    } else {
      setSelected([...selected, cat]);
    }
  };

  const isDisabled = selected.length < 3;

  return (
    <Container style={styles.container}>
      {/* Header */}
      <ShowText
        size={typography.fontSizes.xl}
        weight={typography.fontWeights.bold}
        color={colorTheme.blackAndWhite.black}
        align="left"
      >
        Personalize Suggestion
      </ShowText>

      <ShowText
        size={typography.fontSizes.md}
        color={colorTheme.neutral[500]}
        align="left"
        style={{ marginBottom: spacing.md }}
      >
        Choose min. 3 topics you like, we will give you more often that relate
        to it.
      </ShowText>
      <InputText placeholder="Search Categories" inputType="text" />
      <ScrollView
        contentContainerStyle={styles.chipContainer}
        showsVerticalScrollIndicator={false}
      >
        {categories.map(cat => {
          const isActive = selected.includes(cat);
          return (
            <TouchableOpacity
              key={cat}
              style={[
                styles.chip,
                {
                  backgroundColor: isActive
                    ? colorTheme.primary[500]
                    : colorTheme.blackAndWhite.white,
                  borderColor: colorTheme.primary[500],
                },
              ]}
              onPress={() => toggleCategory(cat)}
            >
              <ShowText
                size={typography.fontSizes.md}
                weight={typography.fontWeights.medium}
                color={
                  isActive
                    ? colorTheme.blackAndWhite.white
                    : colorTheme.primary[500]
                }
              >
                {cat}
              </ShowText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Info */}
      {selected.length > 0 && (
        <ShowText
          align="left"
          size={typography.fontSizes.sm}
          color={colorTheme.neutral[600]}
          style={{ marginBottom: spacing.md }}
        >
          {selected.length} topics selected
        </ShowText>
      )}

      {/* Buttons */}
      <Button
        variant="flat"
        label="Submit"
        disabled={isDisabled}
        style={[
          styles.submitBtn,
          {
            backgroundColor: isDisabled
              ? colorTheme.neutral[200]
              : colorTheme.primary[500],
          },
        ]}
        onPress={() => navigation.navigate('Congratulation')}
      />
      <Button
        variant="outline"
        label="Skip"
        onPress={() => navigation.navigate('Main')}
      />
    </Container>
  );
};

export default Personalize;

const styles = StyleSheet.create({
  container: {
    gap: spacing.lg,
    flex: 1,
    paddingBottom: spacing.lg,
    alignContent: 'center',
    justifyContent: 'center',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  chip: {
    borderWidth: 1,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
  },
});
