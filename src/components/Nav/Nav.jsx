import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.modules.css";

class Nav extends React.Component{
    constructor (props){
        super(props);
    }

    render (){
        return (
            <div className={style.navbar}> 
                <h1>Rick and Morty</h1>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/favorites">Favorites</Link>
                <SearchBar onSearch = {this.props.onSearch} />
            </div>
        );
    }
}

export default Nav;