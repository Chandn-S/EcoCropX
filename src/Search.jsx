import React from "react";
import searchIcon from './assets/search.png';

function Search(){
    return(<div className="search-container">
        <div className="search-innerpart">
            
            <input type="text" name="searchBox" placeholder="What's on your mind"></input>

            <img className="search-img" src={searchIcon} alt="Search image"></img>
        </div>
    </div>);
}

export default Search;