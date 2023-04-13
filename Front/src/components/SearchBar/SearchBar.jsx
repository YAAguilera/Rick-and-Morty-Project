import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {

   const [id, idSet]=useState("")

   function handleChange (event){
      idSet(event.target.value
      )
   }

    return (
       <div className={style.main} >
          <input onChange={handleChange} type='search' placeholder="Buscar..." value={id}/>
          <button onClick={()=> onSearch(id)} className={style.btn}>Agregar</button>
       </div>
    );
 }
 
 