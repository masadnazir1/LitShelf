import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ShowText from './Text';
import spacing from '../../Theme/Spacing';
import ImageComponent from './ImageComponent';

const ProfileUiCard = ({ Name, onMenuePress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.Right}>
        <ImageComponent
          height={spacing.xxl * 1.5}
          width={spacing.xxl * 1.5}
          resizeMode="contain"
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/flat-illustrations-1/550/Mobile_Audiobook-512.png',
          }}
          borderRadius={100}
          style={styles.ProfilePic}
        />
      </View>
      <View style={styles.Left}>
        <TouchableOpacity onPress={onMenuePress} style={styles.MenueRowsButton}>
          <ShowText align="left" letterSpacing={0}>
            {Name}
          </ShowText>
        </TouchableOpacity>
        <TouchableOpacity onPress={onMenuePress} style={styles.MenueRowsButton}>
          <ShowText align="left" letterSpacing={0}>
            View profile
          </ShowText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    padding: spacing.md,
    gap: spacing.md,
    borderRadius: spacing.xs,
  },

  ProfilePic: {
    borderWidth: spacing.xs * 0.1,
    padding: spacing.xs,
  },

  Right: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Left: {
    width: '80%',
  },

  title: {},
  MenueRowsButton: {
    backgroundColor: '#fff',
    borderRadius: spacing.xs,
  },
});

export default ProfileUiCard;
