import React from "react";
import "./SearchBar.css";

function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Rechercher un film..." />
            <button>🔍</button>
        </div>
    );
}

export default SearchBar;
