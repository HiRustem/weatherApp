import React, {useEffect, useState} from 'react'

import { useSelector } from 'react-redux'

import Card from './UI/Card'

import Loader from './UI/Loader'

import { setSunStyles } from '../hooks/setSunStyles'
import { createCardsArray } from '../hooks/createCardsArray'
import { changeBg } from '../hooks/changeBg'

const WeatherInformation = () => {

    const isLoading = useSelector((state) => state.weather.isLoading)
    const info = useSelector((state) => state.weather.info)

    

    const style = setSunStyles(info?.dt, info?.sys?.sunrise, info?.sys?.sunset)
    const cards = createCardsArray(info, style)

    return (
        <div className='w-full flex justify-center mt-10'>

            <div className={`${!isLoading && Object.keys(info).length > 0 ? '' : 'hidden'} w-2/3`}>
                {
                    Object.keys(info).length > 0 ?

                    <div className='cards'>
                        {
                            cards.map((card) => (
                                <Card key={card.id} name={card.name} icon={card.icon} number={card.number} param={card.param} description={card.description} element={card.element} />
                            ))
                        }
                    </div>

                    :

                    ''
                }
            </div>

            <div className={`${isLoading ? '' : 'hidden'}`}>
                <Loader />
            </div>

        </div>
    )
}

export default WeatherInformation