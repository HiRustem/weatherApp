import MapElement from '../components/UI/MapElement'
import CompassElement from '../components/UI/CompassElement'
import PressureElement from '../components/UI/PressureElement'
import SunElement from '../components/UI/SunElement'

import { feelsIcon } from '../assets/svgs/icons/fellsIcon'
import { dropIcon } from '../assets/svgs/icons/dropIcon'
import { mapIcon } from '../assets/svgs/icons/mapIcon'
import { windIcon } from '../assets/svgs/icons/windIcon'
import { pressureIcon } from '../assets/svgs/icons/pressureIcon'
import { sunElementIcon } from '../assets/svgs/icons/sunElementIcon'

export const createCardsArray = (info, style) => {

    const temp = info?.main?.temp
    const feels = info?.main?.feels_like

    let feelsDescription

    if (temp < feels) feelsDescription = 'Кажется, что теплее.'
    if (temp === feels) feelsDescription = 'Примерно как фактическая температура.'
    if (temp > feels) feelsDescription = 'Кажется, что прохладнее.'

    return [
        {
            id: 0,
            name: 'ощущается как',
            number: feels,
            param: '°',
            description: feelsDescription,
            element: null,
            icon: feelsIcon,
        },
        {
            id: 1,
            name: 'влажность',
            number: info?.main?.humidity,
            param: '%',
            description: '',
            element: null,
            icon: dropIcon,
        },
        {
            id: 2,
            name: 'карта',
            number: 0,
            param: '',
            description: '',
            element: <MapElement lat={info?.coord?.lat} lon={info?.coord?.lon} temp={info?.main?.temp} />,
            icon: mapIcon,
        },
        {
            id: 3,
            name: 'ветер',
            number: 0,
            param: '',
            description: '',
            element: <CompassElement speed={info?.wind?.speed} deg={info?.wind?.deg} />,
            icon: windIcon,
        },
        {
            id: 4,
            name: 'давление',
            number: 0,
            param: '',
            description: '',
            element: <PressureElement pressureValue={info?.main?.pressure} />,
            icon: pressureIcon,
        },
        {
            id: 5,
            name: `${style?.mainName} солнца`,
            number: 0,
            param: '',
            description: '',
            element: <SunElement time={info?.dt} element={style?.element} name={style?.name} mainHours={style?.mainHours} mainMinutes={style?.mainMinutes} hours={style?.hours} minutes={style?.minutes} />,
            icon: sunElementIcon,
        },
    ]
}