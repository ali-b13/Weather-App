import axios from "axios";

const Api_weather_url="https://api.openweathermap.org/data/2.5/weather"
const api_key="f33a484cf794d08d0148764789aaba32";
export const getWeather=async(query)=>{
  const data= await axios.get(Api_weather_url,{
    params:{
      q:query,
      units:"metric",
      APPID:api_key
    }
  })
  return data;
}
export const getDefaultAddress=async(lat,lon)=>{
  console.log(lat,'then',lon)
  const data= await axios.get(Api_weather_url,{
   params:{
    lat:lat,
    lon:lon,
    APPID:api_key
   }
  })
  return data;
}
