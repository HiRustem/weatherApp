import { createSlice } from '@reduxjs/toolkit'

export const WeatherReducer = createSlice({
    name: 'weather',
    initialState: {
        query: '',
        info: {},
        isLoading: false,
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        },
        setInfo: (state, action) => {
            state.info = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
    },
})

export const { setQuery, setInfo, setIsLoading } = WeatherReducer.actions
export default WeatherReducer.reducer