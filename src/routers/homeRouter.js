
const router=require("express").Router();

const homeController=require("../controllers/homeController");


router.get("/",homeController.homePage);
router.post("/",homeController.cityWeather);




module.exports=router;