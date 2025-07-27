import axios from "axios";

interface Genre {
  id: number;
  name: string;
}

interface Cast {
  id: number;
  name: string;
  profile_path: string;
}

interface Credits {
  cast: Cast[];
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_count: number;
  overview: string;
  tagline: string;
}

export interface MovieDetails extends Movie {
  credits: Credits;
}

interface PageResult {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number
}

interface GenreResponse {
  genres: Genre[];
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