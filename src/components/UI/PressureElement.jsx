import React from 'react'

import { getCircle } from '../../hooks/getCircle'

const PressureElement = ({pressureValue}) => {
    const pressure = getCircle(25, -200, 160, 150, 160)

    return (
        <div className='w-full h-3/4 flex justify-center'>
            <div className='w-full h-full relative'>
                {
                    pressure.map((plank) => (
                        <span key={plank.id} className={`${plank.id < pressureValue ? 'activePlank' : 'disabledPlank'} plank`} style={plank} />
                    ))
                }
            </div>
            <div className='absolute flex flex-col mt-10 items-center'>
                <p className='pressureMainText'>=</p>
                <p className='pressureMainText'>{pressureValue}</p>
                <p className='pressureText'>мм рт. ст.</p>
            </div>
        </div>
    )
}

export default PressureElement