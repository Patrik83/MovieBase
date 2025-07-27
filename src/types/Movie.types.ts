import type { Credits } from "./Credits.types";

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