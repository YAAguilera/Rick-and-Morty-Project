const express=require("express")
const router=express.Router()
const {logIn}=require('../controllers/login')
const {getCharById}=require('../controllers/getCharById')
const {postFav, deleteFav}=require('../controllers/handleFav')

router.get("/character/:id", getCharById)
router.get("/login", logIn)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)


module.exports=router