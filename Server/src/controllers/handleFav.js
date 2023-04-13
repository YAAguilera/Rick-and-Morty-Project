let myFavorites=[]

function postFav(req, res){
    const {id, name, status, species, gender, origin, image}=req.body
    // if(!id || !name || !status || !species || !gender || !origin || !image){
    //     return res.status(404).json({message : "Character not found"})
    // }

        const characters={id, name, status, species, gender, origin, image}
        myFavorites.push(characters)
        res.status(200).json(myFavorites)
    
}

function deleteFav(req, res){
    const {id}=req.params
    try {
        const deletedFavs=myFavorites.filter((ch)=>ch.id!==Number(id))
        myFavorites=deletedFavs
        res.status(200).json(myFavorites)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

module.exports={
    postFav,
    deleteFav,
}