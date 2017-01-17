import axios from 'axios'

const API_KEY= 'f2a8129350805fa512c60f3cae1a111a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

const fetchWeather = (city) => {
  const url =  `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('Action created', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export default fetchWeather;

