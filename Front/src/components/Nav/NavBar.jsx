import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css"
import { Link } from "react-router-dom";

export default function NavBar({onSearch}) {
    return(
        <div className={style.nav}>
            <SearchBar onSearch={onSearch} />
        <div className={style.mainButtons}>
        <Link to={"/home"}>
        <p className={style.homeBtn}>Home</p>
        </Link>
        <Link to={"/about"}>
        <p className={style.about}>About</p>
        </Link>
        <Link to={"/favorites"}>
        <p>Favorites</p>
        </Link>
        <Link to={"/"}>
        <p className={style.logout}>Log out</p>
        </Link>
        </div>
       
        
        </div>
    )    
}