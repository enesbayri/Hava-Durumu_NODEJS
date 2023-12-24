
const Weather=(result)=>{
    let weather={};
    weather["city"]=result["name"];
    weather["main"]=result["weather"][0]["description"];
    weather["icon"]=result["weather"][0]["icon"]+"@2x.png";
    weather["temp"]=result["main"]["temp"];
    weather["feels_like"]=result["main"]["feels_like"];
    weather["humidity"]=result["main"]["humidity"];
    weather["wind"]=result["wind"]["speed"];
    weather["clouds"]=result["clouds"]["all"];

    return weather;
}

module.exports=Weather;