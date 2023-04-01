import React from 'react'

const SunElement = ({element, name, mainHours, mainMinutes, hours, minutes}) => {
        
    return (
        <div className='w-full h-2/5 flex flex-col justify-center'>
            <p className='sunCardMainText mt-8'>
                {mainHours?.padStart(2, '0')}:{mainMinutes?.padStart(2, '0')}
            </p>
            <div className='w-full h-full relative'>
                {element}
            </div>

            <p className='cardDescription'>{name?.charAt(0).toUpperCase() + name?.slice(1)}: {hours?.padStart(2, '0')}:{minutes?.padStart(2, '0')}</p>
        </div>
    )
}

export default SunElement