import axios from 'axios';

const apiKey = process.env.REACT_APP_WEATHERBIT_API_KEY;  
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
