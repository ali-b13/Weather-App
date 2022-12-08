import React, { useEffect, useState } from 'react'
import '../styles/main.css'
import {getDefaultAddress, getWeather} from '../api/getWeather'
import { ErrorCity } from './ErrorCity';
import { CityData } from './CityData';
import { Loader } from './Loader';
export const Main = () => {
  function getCoordintes() {
 
   async function success(pos) {
      var crd = pos.coords;
      var lat = crd.latitude.toString();
      var lng = crd.longitude.toString();
      var coordinates = [lat, lng];
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      getCity(coordinates)
    return;
  
    }
  
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  
    navigator.geolocation.getCurrentPosition(success, error);
   
  }
  async function getCity(coordinates){
     const res=await  getDefaultAddress(coordinates[0],coordinates[1]);
     console.log(res.data)
       setData(res.data)
       return ;
  }
  useEffect(()=>{
    getCoordintes()
  },[])
  const [query,setQuery]=useState("");
  const [data,setData]=useState(null)
  const [error,setError]=useState("")
  const getWetherHandler=async(e)=>{
    if(e.key=="Enter"){
     await getWeather(query).then(res=>{
      setData(res.data)
      setQuery('')
      setError('')
     })
     .catch(err=>{
      
      setError(err.response.data.message)
    })
   }
  }
 
  return (
    <div className='main-content'>
           {
            (data==null)?<Loader/>:(error=='')?<CityData data={data}/>:<ErrorCity error={error}/>
           }
           
        <div className="input-container">

          <input className='input-field'
           placeholder='Search For A City'
           value={query}
           onChange={(e)=>{setQuery(e.target.value)}}
           onKeyPress={getWetherHandler}
           />
        </div>
    
    </div>
  )
}
