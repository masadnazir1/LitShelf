import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GlobalPlayer from '../components/GlobalPlayer'; // global player
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import colorTheme from '../Theme/Colors';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Library') {
              iconName = focused ? 'document-text' : 'document-text-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colorTheme.primary[600],
          tabBarInactiveTintColor: colorTheme.neutral[500],
          tabBarStyle: {
            backgroundColor: colorTheme.blackAndWhite.white,
            paddingBottom: Platform.OS === 'ios' ? insets.bottom : 8,
            paddingTop: 4,
            height: Platform.OS === 'ios' ? 60 + insets.bottom : 60,
            borderTopWidth: 1,
            elevation: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
      </Tab.Navigator>
      {/* <GlobalPlayer /> */}
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
