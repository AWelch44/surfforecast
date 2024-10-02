import axios from 'axios';

const API_KEY = '28734e3555694ac5b8a1de7f5ba58f9d';  
const BASE_URL = 'https://api.weatherbit.io/v2.0/marine/forecast';

export const getSurfForecast = async (lat, lon) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                lat: lat,
                lon: lon,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching surf forecast", error);
        throw error;
    }
};
