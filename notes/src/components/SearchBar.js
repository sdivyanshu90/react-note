import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = ({handleSearchNote}) => {
    return (
        <div className="search">
            <MdSearch 
                className="search-icon" 
                size='1.7em'
                />
            <input 
                onChange={(event) => 
                handleSearchNote(event.target.value)} 
                type="text" 
                placeholder="Type here to search.."
            />
        </div>
    )
}

export default SearchBar;
