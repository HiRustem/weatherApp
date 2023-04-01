export const getCircle = (length, cx, cy, radius, radiusY, startDegrees, endDegrees) => {
    const array = []

    if (radiusY === undefined) radiusY = radius
    if (startDegrees === undefined) startDegrees = 180
    if (endDegrees === undefined) endDegrees = 0

    const startRadians = startDegrees * Math.PI / 180
    const endRadians = endDegrees * Math.PI / 180
    const stepRadians = (endRadians - startRadians) / (length - 1)

    for (let i = 0; i < length; i++) {
        let radians = i * stepRadians + startRadians

        let x = Math.cos(radians) * radius + cy
        let y = Math.sin(radians) * radiusY + cx
        let deg = 90 + (i * (180 / (length - 1)))

        array.push({
            id: i * (1800 / length),
            bottom: `${Math.floor(y)}px`,
            left: `${Math.floor(x)}px`,
            transform: `rotate(${deg}deg)`,
        })
    }

    return array
}