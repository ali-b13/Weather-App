import React from 'react'
import '../styles/city.css'
export const CityData = ({data}) => {
  return (

      <div className=' section-2 data-of-city-container'>
       <div className="city-name"><span>City : </span>{data.name}</div>
       <div className="city-wind-speed"><span>Wind Speed : </span>{data.wind?.speed}</div>
      <div className="city-deg"><span>Degree : </span>{data.wind?.deg} &#8451;</div>
    </div>
  )
}
