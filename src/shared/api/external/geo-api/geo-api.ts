import axios from 'axios'

export interface ICoords {
  lat: number
  lon: number
}

export const getGeoApi = async ({ lat, lon }: ICoords) => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_GEOAPI_URL}?lat=${lat}&lon=${lon}&lang=en&apiKey=${process.env.NEXT_PUBLIC_GEOAPI_KEY}`
  )
}
