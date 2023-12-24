const axios=require("axios");
const Weather=require("../models/weatherModel");
const FixChars=require("../controllers/characterController");


const weatherDataReq=async (city)=>{
    let fixedCity=FixChars(city);
    let result=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${fixedCity}&appid=${process.env.APIKEY}&lang=tr&units=metric`);
    let weather=Weather(result.data);
    //console.log(weather);
    return weather;
}

module.exports=weatherDataReq;