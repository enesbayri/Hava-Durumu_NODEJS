
const Weather=require("../data/weatherApi");
const ipLocation=require("../data/ipLocation");


const homePage=async (req,res,next)=>{
    let city="ankara"
    //Uygulama Gerçek sunucuya yüklendiğinde ip kontrolü aktif edilir
    //Sunucuya giren kullanıcının IP adresi üzerinden lokasyonu bulunur ve ilk açılışta kullanıcının kendi şehrinin bilgisi verilir!
    //city=await ipLocation(req.ip);
    let weather=await Weather(city);
    res.render("HomePage",{"weather":weather});
    
 
}

const cityWeather=async (req,res,next)=>{
    try {
        let city=req.body.city;
        let weather=await Weather(city);
        res.render("HomePage",{"weather":weather});
    } catch (e) {
        next();
    }
}

/*
main:
temp: sıcaklık
feels_like: hissedilen sıcaklık
humidity: nem %
pressure: atmosferik basınç
sea_level: deniz seviyesi basın.
grnd_level: zemin seviyesi basınç.


wind:
speed: rüzgar hızı
deg: rüzgar yönü derece
gust: rüzgar metre/sn

clouds: bulutluluk %

*/


module.exports={
    homePage,
    cityWeather
}