import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '68c0dc3a7887f874cd74bdf857f2c90a';

// запрос на фильмы в тренде на главной странице
export const fetchTrends = async () => {
    try {
        const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// запрос на поиск фильмов
export const fetchMovies = async (query, page) => {
    try {
        const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=en-US`,);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// запрос на карточку фильма
export const getMovieById = async id => {
    try {
      const response = await axios.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`,
      );
  
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };