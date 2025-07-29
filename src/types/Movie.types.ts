import type { Credits } from "./Credits.types";
import type { Genre } from "./Genre.types";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_count: number;
  overview: string;
  tagline: string;
  status: string;
}

export interface MovieDetails extends Movie {
  credits: Credits;
  genres: Genre[];
}