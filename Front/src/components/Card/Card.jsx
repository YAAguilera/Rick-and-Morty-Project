import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({id, onClose, name, status, gender, species, image, addFav, removeFav, myFavorites}) {
   const [isFav, setIsFav]=useState(false)

   const handleFavorite=()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav(
            {id, 
            onClose, 
            name, 
            status, 
            gender, 
            species, 
            image,
            onClose,
            addFav,
            removeFav,
         });
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   },[myFavorites]);
   
   return (
      <div className={style.cont}>
         {isFav ? (
         <button onClick={handleFavorite}>❤️</button>) : (
         <button onClick={handleFavorite}>🤍</button>)
         }
         <button onClick={()=>onClose(id)} className={style.closeBtn} >X</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt={name} />

      </div>
   );
}

export const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites
   }

}

export const mapDispatchToProps=(dispatch)=>{
   return{
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)