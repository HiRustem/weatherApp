import axios from 'axios'

export const getWeather = async (query) => {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&lang=ru&appid=37cb6d0406feb07f1e4278f9bb6c634c&units=metric`)
}