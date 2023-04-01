import React from 'react'

import { compass } from '../../assets/svgs/compass'
import { compassArrow } from '../../assets/svgs/compassArrow'

const CompassElement = ({speed, deg}) => {

    return (
        <div className='w-full h-3/4 relative flex justify-center items-center'>
            <div className='w-full h-full z-10'>{compass}</div>
            <div className='absolute compassCenter z-50'>
                <p className='font-bold'>{Math.floor(speed)}</p>
                <p className='compassText'>м/с</p>
            </div>
            <span className='w-full h-full absolute z-20' style={{transform: `rotate(${deg}deg)`}}>{compassArrow}</span>
        </div> 
    )
}

export default CompassElement