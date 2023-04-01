import React from 'react'

import SearchBar from './SearchBar'
import WeatherInformation from './WeatherInformation'

const Main = () => {

    return (
        <div className='mainContainer'>
            <SearchBar />

            <WeatherInformation />
        </div>
    )
}

export default Main