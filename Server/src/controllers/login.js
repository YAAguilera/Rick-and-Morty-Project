const {dbemail, dbpassword}=require("../utils/users")


function logIn(req, res){
   const {email, password}=req.query

    if(!password || !email){
        res.status(500).json({message:"There isn't a password or email"})
    }
    
   if(password===dbpassword && email===dbemail){
    res.status(200).json({access: true})
   }
   else{
    res.status(404).json({access: false})
   }
}

module.exports={
    logIn
}