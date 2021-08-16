export default function getCenter(coordinates) {
    let x = coordinates.map(c => c.lat)
    let y = coordinates.map(c => c.lng)
    let minX = Math.min.apply(null, x)
    let maxX = Math.max.apply(null, x)
    let minY = Math.min.apply(null, y)
    let maxY = Math.max.apply(null, y)
    return {
        lat: (minX + maxX) / 2,
        lng: (minY + maxY) / 2
    }
}