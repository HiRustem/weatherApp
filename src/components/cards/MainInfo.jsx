import React from 'react'

import { useSelector } from 'react-redux'

const MainInfo = ({object}) => {

    const isLoading = useSelector((state) => state.weather.isLoading)
    const info = useSelector((state) => state.weather.info)

    return (
        <div className={`${!isLoading && Object.keys(info).length !== 0 ? '' : 'hidden'} w-1/2 p-5 mt-10`}>
            {
                Object.keys(object).length > 0 ? 

                    <div className='flex flex-col justify-center items-center text-center'>
                        <p className='cityName'>{object.name}</p>

                        <p className='temp'>
                            {`${Math.floor(object.main.temp)}°`}
                        </p>

                        <p className='description'>
                            {object.weather[0].description.charAt(0).toUpperCase() + object.weather[0].description.slice(1)}
                        </p>

                        <div className='flex flex-row'>
                            <p className='minAndMaxTemp mr-2'>
                                {`Макс.: ${Math.floor(object.main.temp_max)}°`}
                            </p>

                            <p className='minAndMaxTemp'>
                                {`Мин.: ${Math.floor(object.main.temp_min)}°`}
                            </p>
                        </div>
                    </div>

                :

                ''
            }
        </div>
    )
}

export default MainInfo