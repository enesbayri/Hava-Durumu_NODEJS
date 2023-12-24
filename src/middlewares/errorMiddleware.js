const cityError=async (req,res,next)=>{
    res.render("HomePage",{"error":"Şehir Bulunamadı!"});
    
 
}


module.exports=cityError;