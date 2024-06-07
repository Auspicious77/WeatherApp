import axios from "axios";
import { API_KEY } from "../src/utils/shared";

export const getWeatherData = async (city: string, days?: string) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
            params: {
                key: API_KEY,
                q: city,
                aqi: 'no',
                days: days
            }
        });
        // console.log({response})
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};

export const geLocationData = async (city: string,) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/search.json?`, {
            params: {
                key: API_KEY,
                q: city,
            }
        });
        // console.log({response})
        return response?.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};




