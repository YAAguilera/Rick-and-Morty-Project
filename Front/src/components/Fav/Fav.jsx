import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import Card from "../Card/Card"
import { filterCards, orderCards } from "../../Redux/action"

const Fav=()=>{
    const [aux, setAux]=useState(false)
    const favorites=useSelector((state)=>state.myFavorites)
    const dispatch=useDispatch()

    const handleOrder=(evento)=>{
        setAux({
            aux:true
        })
        dispatch(orderCards(evento.target.value))
    }

    const handleFilter=(evento)=>{
        dispatch(filterCards(evento.target.value))
    }

    return(
        <>
        <div>
        <select onChange={handleOrder}>
            <option value="order" disabled='disabled'>Order by</option>
            <option value="a">Ascendente</option>
            <option value="b">Descendente</option>
        </select>
        <select onChange={handleFilter}>
        <option value="filter" disabled='disabled'>Filter by</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        </div>
    {favorites.map((characters, index)=>{
        return(
            <Card
            key={index}
             id={characters.id}
             name={characters.name}
             status={characters.status}
             species={characters.species}
             gender={characters.gender}
             image={characters.image}
            />
        )
    })}
    </>
    )
}

export default Fav