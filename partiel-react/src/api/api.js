const API_KEY = '82a4b8a952e82748e2bb3eb4c3c1da59';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = {
    fetchTrendingMovies: async () => {
        const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch trending movies');
        }
        return response.json();
    },
    fetchMovieDetails: async (movieId) => {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch movie details');
        }
        return response.json();
    },
    fetchMovieCredits: async (movieId) => {
        const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch movie credits');
        }
        return response.json();
    },
};

export default api;

