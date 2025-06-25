import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_count: number;
}

interface MovieResponse {
  results: Movie[];
}

const API_KEY = import.meta.env.VITE_TMDB_API_KEY as string;
const BASE_URL = import.meta.env.VITE_BASE_URL as string;

const instance = axios.create({
  baseURL: BASE_URL,
  params: { 
    api_key: API_KEY,
  },
});

export const getTopRated = async () => {
  const res = await instance.get<MovieResponse>(`/movie/top_rated?sort_by=vote_average.desc`);
  return res.data;
}