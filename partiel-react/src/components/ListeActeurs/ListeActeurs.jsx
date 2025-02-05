import React from 'react';
import './ListeActeurs.css';

function ListeActeurs({ cast }) {
    return (
        <div className="liste-acteurs">
            <h2>Acteurs</h2>
            <div className="acteurs-container">
                {cast.map((actor) => (
                    <div key={actor.id} className="acteur">
                        <img
                            src={
                                actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                    : 'https://via.placeholder.com/200x300?text=No+Image'
                            }
                            alt={actor.name}
                        />
                        <p>{actor.name}</p>
                        <span>{actor.character}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListeActeurs;
