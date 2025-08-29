import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { PlayerProvider } from './App/contexts/PlayerContext'; //import provider

import RootLayout from './App/Layout/RootLayout';

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
            <RootLayout />
            {/* <AppNavigator /> */}
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </PlayerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
