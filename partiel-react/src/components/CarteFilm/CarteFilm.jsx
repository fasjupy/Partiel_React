import React from "react";
import { Link } from "react-router-dom";
import "./CarteFilm.css";

function CarteFilm({ id, title, posterPath, rating }) {
    const posterUrl = posterPath
        ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : "https://via.placeholder.com/500x750?text=No+Image";

    return (
        <div className="carte-film">
            <Link to={`/film/${id}`}>
                <img src={posterUrl} alt={title} />
            </Link>
            <h3>{title}</h3>
            <p>Note : {rating}</p>
        </div>
    );
}

export default CarteFilm;
