import type React from "react";
import type { Movie } from "../types/Movie.types";
import { dateFormatter } from "../utils/dateFormatter";

interface SearchResultProps {
  movie: Movie;
}

const SearchResult: React.FC<SearchResultProps> = ({ movie }) => {
  return (
    <div className="grid grid-cols-3 gap-5 mb-5 sm:grid-cols-3 sm:gap-10 sm:mb-10 lg:grid-cols-5 lg:gap-16 lg:px-0 bg-dark-gradient">
      <img 
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} 
        alt=""
        className="w-32 sm:w-64 h-auto lg:w-full"
      />

      <div className="col-span-2 sm:col-span-2 sm:mt-0 sm:pt-3 sm:space-y-6 lg:p-4 lg:mt-0 lg:space-y-10 rounded-lg">
        <h2 className="text-sm sm:text-2xl lg:text-4xl font-bold text-gray-300">{movie.title}</h2>
        <p className="text-gray-300">{movie.status} {dateFormatter(movie.release_date)}</p>
        <p className="invisible sm:visible text-1xl text-gray-300">{movie.overview}</p>
      </div>
    </div>
  )
}

export default SearchResult;