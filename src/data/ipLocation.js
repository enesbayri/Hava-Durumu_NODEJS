const axios=require("axios");



const ipLocation=async (ip)=>{
    let result=await axios.get(`https://api.ipstack.com/${ip}?access_key=${process.env.IPAPIKEY}`);
    let city=result["location"]["capital"];
    return city;
}

module.exports=ipLocation;