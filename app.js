const express=require("express");
const dotenv=require("dotenv").config();
const app=express();
const path=require("path");
const homeRouter=require("./src/routers/homeRouter");
const cityError=require("./src/middlewares/errorMiddleware");



//ejs ayarları
const ejs=require("ejs");
const expressLayouts=require("express-ejs-layouts");

app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"./src/views"));


//public dizinindeki verileri erişime açık hale getiriyoruz
app.use(express.static("public"));


//post isteklerini okumak için ayarlar
app.set('trust proxy', true)
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use(expressLayouts);
app.use("/",homeRouter);
app.use(cityError);


app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT+" port server aktif");
});