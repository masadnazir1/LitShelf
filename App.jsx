import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './App/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { PlayerProvider } from './App/contexts/PlayerContext'; //import provider
import GlobalPlayer from './App/components/GlobalPlayer'; // global player

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <PlayerProvider>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
          {/* ✅ Always mounted, shows player globally */}
          <GlobalPlayer />
        </SafeAreaView>
      </SafeAreaProvider>
    </PlayerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Or from your theme
  },
  Player: {
    position: 'absolute',
    bottom: 0,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center the button
    paddingHorizontal: 20,
  },
});

export default App;
