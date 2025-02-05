import React from "react";
import "./ListeFilm.css";
import CarteFilm from "../CarteFilm/CarteFilm";

function ListeFilm() {
    const movies = [
        { id: 1, title: "Dune", poster: "/img/thumbnail.png", rating: 80 },
        { id: 2, title: "Squid Game", poster: "/img/thor.jpg", rating: 85 },
        { id: 3, title: "Hypnotic", poster: "/img/bg.png", rating: 75 },
    ];

    return (
        <div className="liste-film">
            <h2>Films tendances</h2>
            <div className="films-container">
                {movies.map((movie) => (
                    <CarteFilm key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default ListeFilm;
