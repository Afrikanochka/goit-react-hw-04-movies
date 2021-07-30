import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '68c0dc3a7887f874cd74bdf857f2c90a';

export const trendingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const searchMovies = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMovieByQuery = async (query) => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
