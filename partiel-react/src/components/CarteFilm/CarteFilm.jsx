import React from 'react';
import './CarteFilm.css';

function CarteFilm({ title, posterPath, rating }) {
    const posterUrl = posterPath
        ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return (
        <div className="carte-film">
            <img src={posterUrl} alt={title} />
            <h3>{title}</h3>
            <p>Note : {rating}</p>
        </div>
    );
}

export default CarteFilm;
