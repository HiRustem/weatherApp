import { configureStore } from '@reduxjs/toolkit'

import WeatherReducer from './reducers/WeatherReducer'

export default configureStore({
    reducer: {
        weather: WeatherReducer,
    },
})