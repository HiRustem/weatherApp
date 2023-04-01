import React from 'react'

const Card = ({name, number, icon, param, description, element}) => {
    return (
        <div className='card'>
            <div className='cardHeader'>
                <span className='w-2/12 h-full'>{icon}</span>
                <h1 className='w-3/4 h-full'>{name.toUpperCase()}</h1>
            </div>

            {
                element !== null ?

                    <div className='cardElement'>
                        {element}
                    </div>

                :

                    <div className='cardNumber'>
                        {`${Math.floor(number)}${param}`}
                    </div>
            }

            <p className='cardDescription'>
                {description}
            </p>
        </div>
    )
}

export default Card