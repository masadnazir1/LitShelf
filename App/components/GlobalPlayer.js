import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colorTheme from '../Theme/Colors';
import spacing from '../Theme/Spacing';
import { IconNames } from '../Theme';
import { usePlayer } from '../contexts/PlayerContext';
import Button from './Shared/Button';

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const GlobalPlayer = () => {
  const { current, isPlaying, position, duration, togglePlay, ClosePlayer } =
    usePlayer();
  //

  if (!current) return null;
  const progress = duration > 0 ? clamp(position / duration, 0, 1) : 0;

  return (
    <View style={styles.wrapper}>
      <View style={styles.progressContainer}>
        <View style={styles.progressBackground} />

        <View
          style={[styles.progressForeground, { width: `${progress * 100}%` }]}
        />
      </View>

      <View style={styles.row}>
        <Image
          source={
            current.coverImage
              ? { uri: current.coverImage }
              : require('../Assets/logo.png')
          }
          style={styles.art}
        />
        <View style={styles.meta}>
          <Text numberOfLines={1} style={styles.title}>
            {current.title}
          </Text>
          {!!current.artist && (
            <Text numberOfLines={1} style={styles.artist}>
              {current.artist}
            </Text>
          )}
        </View>

        <View style={styles.controls}>
          <Button
            onPress={togglePlay}
            icon={isPlaying ? IconNames.pauseFilled : IconNames.playFilled}
            type="icon-only"
            iconSize={spacing.xxl}
            variant="ghost"
            paddingVertical={spacing.xs}
          />

          <View style={{ width: 16 }} />

          <Button
            onPress={ClosePlayer}
            icon={IconNames.close}
            type="icon-only"
            iconSize={spacing.xl}
            variant="ghost"
            paddingVertical={spacing.xs}
            height
          />
        </View>
      </View>
    </View>
  );
};

export default GlobalPlayer;

const styles = StyleSheet.create({
  progressContainer: {
    height: spacing.xs,
    width: '100%',
    backgroundColor: 'transparent', // container is just a holder
    position: 'relative',
    overflow: 'hidden',
    alignContent: 'center',
    justifyContent: 'center',
  },
  progressBackground: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: colorTheme.neutral[300], // gray background
  },
  progressForeground: {
    position: 'absolute',
    height: '100%',
    backgroundColor: colorTheme.primary[500], // your active color
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 60,
    backgroundColor: colorTheme.blackAndWhite.white,
  },
  progress: {
    height: 3,
    backgroundColor: colorTheme.primary[500],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
  },
  art: {
    width: 44,
    height: spacing.xxl,
    resizeMode: 'contain',
    backgroundColor: colorTheme.neutral[100],
  },
  meta: {
    flex: 1,
    minWidth: 0,
    marginLeft: spacing.xs,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  artist: {
    color: '#6b7280',
    fontSize: 12,
    marginTop: 2,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
  },
});
