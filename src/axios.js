import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
    // https://api.themoviedb.org/3/movie/550?api_key=b97978517b614d256ae0df084598757c
});

// instance.get('/foo-bar');
export default instance;