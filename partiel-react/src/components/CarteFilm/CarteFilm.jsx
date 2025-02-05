import React from "react";
import "./CarteFilm.css";

function CarteFilm({ movie }) {
    return (
        <div className="carte-film">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Note : {movie.rating}%</p>
        </div>
    );
}

export default CarteFilm;
