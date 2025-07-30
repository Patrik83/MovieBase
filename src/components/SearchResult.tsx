import type React from "react";
import type { Movie } from "../types/Movie.types";
import { dateFormatter } from "../utils/dateFormatter";

interface SearchResultProps {
  movie: Movie[];
}

const SearchResult: React.FC<SearchResultProps> = ({ movie }) => {
  return (
    <>
    {movie.map(result => (
        <div 
          key={result.id} 
          className="grid grid-cols-3 gap-5 mb-5 sm:grid-cols-4 sm:gap-10 sm:mb-10 lg:grid-cols-5 lg:gap-16 lg:px-0 bg-dark-gradient px-2"
        >
        <img 
          src={`https://image.tmdb.org/t/p/w342/${result.poster_path}`} 
          alt=""
          className="w-full sm:w-48 h-auto lg:w-full"
        />

        <div className="col-span-2 sm:col-span-3 lg:col-span-3 sm:mt-0 sm:pt-3 lg:p-4 lg:mt-0">
          <h2 className="text-sm sm:text-2xl lg:text-4xl font-bold text-gray-300">{result.title}</h2>
          <p className="text-gray-300">{result.status} {dateFormatter(result.release_date)}</p>
          <p className="hidden sm:block text-1xl text-gray-300 pt-5">{result.overview}</p>
        </div>
      </div>
      ))}
    </>
  )
}

export default SearchResult;