import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Save data to AsyncStorage
 * @param {string} key
 * @param {any} value
 */
export const setItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(`Error saving ${key} to AsyncStorage`, e);
  }
};

/**
 * Get data from AsyncStorage
 * @param {string} key
 * @returns {Promise<any | null>}
 */
export const getItem = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(`Error reading ${key} from AsyncStorage`, e);
    return null;
  }
};

/**
 * Remove item from AsyncStorage
 * @param {string} key
 */
export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(`Error removing ${key} from AsyncStorage`, e);
  }
};

/**
 * Clear all keys from AsyncStorage (use cautiously)
 */
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error('Error clearing AsyncStorage', e);
  }
};
