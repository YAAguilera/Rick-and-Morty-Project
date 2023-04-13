const axios=require('axios')
const URL="https://rickandmortyapi.com/api/character/"


const getCharById=(req, res)=>{
const {id}=req.params
 axios.get(URL + id).then(
    (response)=>{
        const character={
            id:response.data.id,
            status:response.data.status,
            name:response.data.name,
            species:response.data.species,
            origin:response.data.origin,
            image:response.data.image,
            gender:response.data.gender,
        }
        if(character){
        res.status(200).json(character)
        }
        else{
            res.status(404).send('Not found')
        }
    }
 ).catch((error)=>{
    res.status(500).send(error.message)
 })
}
// const getCharById= async (req, res)=>{
// try {
//     const { id } = req.params
//     const response = await axios.get (URL + id)
//     const character={
//         id:response.data.id,
//         status:response.data.status,
//         name:response.data.name,
//         species:response.data.species,
//         origin:response.data.origin,
//         image:response.data.image,
//         gender:response.data.gender,
//     }
//     if(character){
//         res.status(200).json(character)
//     }
//     else{
//         res.status(404).send('Not found')
//     }
// } catch (error) {
//     res.status(500).send(error)
// }

module.exports={
    getCharById
}