import type { Credits } from "./Credits.types";
import type { Movie } from "./Movie.types";

export interface Person {
  id: number;
  name: string;
  profile_path: string;
  biography: string;
}

export interface PersonResponse extends Person {
  credits: Credits<Movie>;
}