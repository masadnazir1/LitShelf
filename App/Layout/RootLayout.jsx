import { View, StyleSheet } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import GlobalPlayer from '../components/GlobalPlayer';

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <AppNavigator />
      </View>

      <GlobalPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigator: {
    flex: 1,
  },
});

export default RootLayout;
