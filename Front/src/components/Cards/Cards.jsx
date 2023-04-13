import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   return <div className={style.separate}>
      {characters.map((characters, index)=>{
         return <Card
         key={index}
         id={characters.id}
         name={characters.name}
         status={characters.status}
         species={characters.species}
         gender={characters.gender}
         image={characters.image}
         onClose={onClose}
         />
      })}
   </div>; 
}
