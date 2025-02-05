import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import "./DetailFilm.css";

function DetailFilm() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieData = await api.fetchMovieDetails(id);
                setMovie(movieData);

                const creditsData = await api.fetchMovieCredits(id);
                setCast(creditsData.cast.slice(0, 5));
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div className="detail-film">
            {/* ✅ Background Image Container */}
            <div className="detail-banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
                <div className="overlay"></div>
            </div>

            {/* ✅ Actual Content */}
            <div className="detail-film-content">
                <div className="movie-header">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="movie-poster"
                    />
                    <div className="movie-info">
                        <div className="rating">{Math.round(movie.vote_average * 10)}%</div>
                        <h1>{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
                        <p>
                            {new Date(movie.release_date).toLocaleDateString()} -
                            {movie.genres.map(g => g.name).join(", ")} -
                            {movie.runtime} min
                        </p>
                        <h2>Synopsis</h2>
                        <p>{movie.overview}</p>
                    </div>
                </div>

                <div className="casting">
                    <h2>Casting</h2>
                    <div className="cast-list">
                        {cast.map(actor => (
                            <div key={actor.id} className="cast-member">
                                <img
                                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : "https://via.placeholder.com/200"}
                                    alt={actor.name}
                                />
                                <p><strong>{actor.name}</strong></p>
                                <p>{actor.character}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailFilm;
