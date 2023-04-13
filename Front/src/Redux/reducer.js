import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action"

const inicialState={
    myFavorites:[],
    allCharacters:[],
}

const rootReducer=(state=inicialState, { type, payload })=>{
    switch(type){
        case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
      case REMOVE_FAV:
        return { ...state, myFavorites: payload };
        case FILTER:
            const allCharFiltered=state.allCharacters.filter((ch)=>ch.gender===payload)
            return{
                ...state,
                myFavorites: allCharFiltered
            }
        case ORDER:
            return{
                ...state,
                myFavorites:
                payload==="A"
                ? state.allCharacters.filter((a,b)=>a.id-b.id)
                : state.allCharacters.filter((a,b)=>b.id-a.id)
            }
        
        default:
            return{
                ...state
            }

    }
}

export default rootReducer;