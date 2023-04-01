import { sunriseIcon } from '../assets/svgs/icons/sunriseIcon'
import { sunsetIcon } from '../assets/svgs/icons/sunsetIcon'

export const setSunStyles = (dt, sr, ss) => {
    let object

    const now = new Date(dt * 1000).toLocaleTimeString()
    const hours = now.charAt(0) + now.charAt(1)

    let sunrise = new Date(sr * 1000).toLocaleTimeString()
    let sunset = new Date(ss * 1000).toLocaleTimeString()

    let sunriseHours
    let sunsetHours
    let sunriseMinutes
    let sunsetMinutes

    if (sunrise > sunset) {
        sunriseHours = sunset.charAt(0) + sunset.charAt(1)
        sunsetHours = sunrise.charAt(0) + sunrise.charAt(1)
        sunriseMinutes = sunset.charAt(3) + sunset.charAt(4)
        sunsetMinutes = sunrise.charAt(3) + sunrise.charAt(4)
    } 

    if (sunset > sunrise) {
        sunriseHours = sunrise.charAt(0) + sunrise.charAt(1)
        sunsetHours = sunset.charAt(0) + sunset.charAt(1)
        sunriseMinutes = sunrise.charAt(3) + sunrise.charAt(4)
        sunsetMinutes = sunset.charAt(3) + sunset.charAt(4)
    }

    if (parseInt(sunriseHours) < hours && hours < parseInt(sunsetHours)) {
        object = {
            mainName: 'заход',
            name: 'восход',
            element: sunsetIcon,
            mainHours: sunsetHours,
            mainMinutes: sunsetMinutes,
            hours: sunriseHours,
            minutes: sunriseMinutes,
        }
    }
    
    if (parseInt(hours) < parseInt(sunrise) || parseInt(hours) > parseInt(sunset)) {
        object = {
            mainName: 'восход',
            name: 'заход',
            element: sunriseIcon,
            mainHours: sunriseHours,
            mainMinutes: sunriseMinutes,
            hours: sunsetHours,
            minutes: sunsetMinutes,
        }
    }

    if (parseInt(sunriseHours) > hours || hours > parseInt(sunsetHours)) {
        
    }

    return object
}