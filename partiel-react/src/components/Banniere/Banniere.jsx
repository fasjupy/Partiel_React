import React from 'react';
import './Banniere.css';

function Banniere({ title, backdropPath, rating }) {
    const backdropUrl = backdropPath
        ? `https://image.tmdb.org/t/p/w1280${backdropPath}`
        : 'https://via.placeholder.com/1280x720?text=No+Image';

    return (
        <div
            className="banniere"
            style={{ backgroundImage: `url(${backdropUrl})` }}
        >
            <div className="banniere-content">
                <h1>{title}</h1>
                <p>Note : {rating}</p>
            </div>
        </div>
    );
}

export default Banniere;
