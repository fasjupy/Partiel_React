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
};

export default api; // ✅ Updated export name
