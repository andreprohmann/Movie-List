import axios from "axios"

const base_url = "https://api.themoviedb.org/3/";
const api_key = "3e074b6d14a7158d77bae02b97da066e";

const withBaseUrl = (path) => `${base_url}${path}?api_key=${api_key}`;

export class MovieService {
    static getMovies() {
        return axios(withBaseUrl("movie/popular"));
    }

    static getMoviesDetails(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
    static searchMovies(movie) {
        return axios(withBaseUrl("search/movie") + `&query=${movie}`);
    }
}

