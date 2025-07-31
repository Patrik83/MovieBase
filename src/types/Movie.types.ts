import type { Credits } from "./Credits.types";
import type { Genre } from "./Genre.types";
import type { Person } from "./Person.types";

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

export interface MovieResponse extends Movie {
  credits: Credits<Person>;
  genres: Genre[];
}