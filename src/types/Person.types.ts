import type { Credits } from "./Credits.types";
import type { Movie } from "./Movie.types";

export interface Image {
  file_path: string;
}

export interface Person {
  id: number;
  name: string;
  profile_path: string;
  biography: string;
  images: { 
    profiles: Image[];
  }
}

export interface PersonResponse extends Person {
  credits: Credits<Movie>;
}