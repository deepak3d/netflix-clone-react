const API_KEY = 'b97978517b614d256ae0df084598757c';
const request = {
    fetchTrending: `/trending/all/week?api_key${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv/?api_key${API_KEY}&with_networks=213`,
    fetchTopRated: `/movies/top_rated/?api_key${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key${API_KEY}&with_genres=28`,
    fetchComdeyMovies: `/discover/moive?api_key${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/moive?api_key${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/moive?api_key${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/moive?api_key${API_KEY}&with_genres=99`,
};
export default request;