import React, { useEffect, useState } from 'react';
import ListeFilm from '../components/ListeFilm/ListeFilm';
import api from '../api/api';

function Home() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const data = await api.fetchTrendingMovies();
                setTrendingMovies(data.results);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };

        fetchTrendingMovies();
    }, []);

    return (
        <div className="home">
            <h1>Accueil</h1>
            <ListeFilm movies={trendingMovies} />
        </div>
    );
}

export default Home;
