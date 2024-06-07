import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async(key: string, value: string) => {
    try {
      
        await AsyncStorage.setItem(key, value);
        console.log('city stored successfully', value)
        
    } catch (error) {
        console.log('error in storing value::', error)
        
    }
}

export const getData = async (key: string) => {
    try {
        console.log('this is my city', key);
        const value = await AsyncStorage.getItem(key); 
        console.log('Retrieved value:', value);
        return value; // Return the retrieved value
    } catch (error) {
        console.log('Error in retrieving value:', error);
        return null; // Return null if an error occurs
    }
};
