import React, { useEffect, useRef } from 'react'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

const MapElement = ({lat = 55, lon = 55, temp}) => {

    const map = useRef(null);

    const setMap = () => {
        if (map.current) {
            map.current.setCenter([lat, lon])
        }
    }

    useEffect(() => {
        setMap()
    })

    const properties = {
        iconContent: Math.floor(temp),
    }

    const options = {
        preset: 'islands#grayCircleIcon',
        
    }

    return (
        <YMaps>
            <Map defaultState={{center: [lat, lon], zoom: 10, behaviors: []}} instanceRef={map}>
                <Placemark geometry={[lat, lon]} properties={properties} options={options} />
            </Map>
        </YMaps>
    )
}

export default MapElement