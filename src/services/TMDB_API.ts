import axios from "axios";
import type { Movie, MovieDetails } from "../types/Movie.types";
import type { GenreResponse } from "../types/Genre.types";

interface PageResult {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number
}

const API_KEY = import.meta.env.VITE_TMDB_API_KEY as string;
const BASE_URL = import.meta.env.VITE_BASE_URL as string;

const instance = axios.create({
  baseURL: BASE_URL,
  params: { 
    api_key: API_KEY,
  },
});

export const getTopRated = async (pageNumber: number) => {
  const res = await instance.get<PageResult>("/movie/top_rated", {
    params: {
      page: pageNumber,
    }
  });
  return res.data;
}

export const getTrending = async (pageNumber: number) => {
  const res = await instance.get<PageResult>("/trending/movie/day", {
    params: {
      page: pageNumber,
    }
  });
  return res.data;
}

export const searchMovie = async (searchQuery: string, pageNumber: number) => {
  const res = await instance.get<PageResult>("/search/movie", {
    params: {
      query: searchQuery,
      page: pageNumber,
    }
  });
  return res.data;
}

export const getGenres = async () => {
  const res = await instance.get<GenreResponse>("/genre/movie/list");
  return res.data.genres;
}

export const getMovieDetails = async (movieId: number) => {
  const res = await instance.get<MovieDetails>(`/movie/${movieId}`, {
    params: {
      append_to_response: "credits"
    }
  });
  return res.data;
}