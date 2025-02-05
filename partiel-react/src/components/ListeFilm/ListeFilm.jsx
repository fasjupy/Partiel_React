import React from 'react';
import CarteFilm from '../CarteFilm/CarteFilm';
import './ListeFilm.css';

function ListeFilm({ movies }) {
    return (
        <div className="liste-film">
            <h2>Films tendances</h2>
            <div className="films-container">
                {movies.map((movie) => (
                    <CarteFilm
                        key={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                        rating={movie.vote_average}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListeFilm;
