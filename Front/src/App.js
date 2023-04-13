import React, {useState, useEffect} from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Fav from './components/Fav/Fav'



function App() {
   const[characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false);
const nav = useNavigate();

function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login';
   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
     console.log(data);
     setAccess(data.access);
     data.access && nav('/home');
   });
 }
 

   useEffect(() => {
      !access && nav('/');
    }, [access, nav]);


   const onSearch = async (id)=> {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((ch) => ch.id === data.id)
            if(exist){
               alert("ya existe")
            }
            else{
               setCharacters((oldChars) => [...oldChars, data])};
         } if(!id) {
            alert('¡No hay personajes con este ID!');
         }
      });
      // try {
      //    const data= await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      //    if(data.name){
      //       let exist = characters.find((ch) => ch.id === data.id)
      //       if(exist){
      //          alert("ya existe")
      //       }
      //       else{
      //          setCharacters((oldChars) => [...oldChars, data])
      //       }
      //    }
      //    else{
      //       window.alert('¡No hay personajes con este ID!');
      //    }
      // } catch (error) {
      //    console.log(error.message)
      // }
   }


   
   function onClose(id) {
      setCharacters((oldChars) => {
        return oldChars.filter((ch) => ch.id !== id);
      });
   }

   const location=useLocation()
   return (
      <div className='App'>
         {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path='*' element={<Error/>}/> 
            <Route path="/favorites" element={<Fav/>}/>
         </Routes>
         
      </div>
   );

   
   
}

export default App;
