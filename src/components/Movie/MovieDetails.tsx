import type { MovieDetails as MovieDetailsType } from "../../types/Movie.types";
import { dateFormatter } from "../../utils/dateFormatter";

interface MovieDetailsProps {
  movie: MovieDetailsType;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div className="grid grid-cols-1 bg-dark-gradient lg:grid-cols-3 lg:gap-16 px-2 lg:px-0 lg:mt-10">
      <div className="flex flex-row lg:col-span-1">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          alt=""
          className="w-32 sm:w-64 h-auto lg:w-full"
        />
        <div className="lg:hidden px-4 text-gray-300">
          <h2 className="font-bold text-xl sm:text-3xl">{movie.title}</h2>

          <div className="flex flex-wrap justify-between px-5">
            {movie.genres.map(genre => (
              <p className="text-gray-300 text-sm sm:text-1xl pt-3">{genre.name}</p>
            ))}
          </div>
        </div>
        
      </div>
      <div className="col-span-2 mt-5 pt-5 lg:p-4 lg:mt-0 space-y-10">
        <h2 className="hidden lg:block text-5xl lg:text-7xl font-bold text-gray-300">{movie.title}</h2>
        <p className="text-gray-300">{movie.status} {dateFormatter(movie.release_date)}</p>
        <p className="text-1xl text-gray-300">{movie.overview}</p>

        <div className="flex">
          <div className="p-2 lg:p-5">
            <img src={`https://image.tmdb.org/t/p/w92/${movie.credits.cast[0].profile_path}`} alt="" className="w-14 h-14 lg:w-24 lg:h-24 rounded-full object-cover mx-auto"/>
            <p className="mt-2 font-bold text-xs lg:text-md text-gray-300 text-center">{movie.credits.cast[0].name}</p>
          </div>
          
          <div className="p-2 lg:p-5">
            <img src={`https://image.tmdb.org/t/p/w92/${movie.credits.cast[1].profile_path}`} alt="" className="w-14 h-14 lg:w-24 lg:h-24 rounded-full object-cover mx-auto"/>
            <p className="mt-2 font-bold text-xs lg:text-md text-gray-300 text-center">{movie.credits.cast[1].name}</p>
          </div>
          
          <div className="p-2 lg:p-5">
            <img src={`https://image.tmdb.org/t/p/w92/${movie.credits.cast[2].profile_path}`} alt="" className="w-14 h-14 lg:w-24 lg:h-24 rounded-full object-cover mx-auto"/>
            <p className="mt-2 font-bold text-xs lg:text-md text-gray-300 text-center">{movie.credits.cast[2].name}</p>
          </div>

          <div className="p-2 lg:p-5">
            <img src={`https://image.tmdb.org/t/p/w92/${movie.credits.cast[3].profile_path}`} alt="" className="w-14 h-14 lg:w-24 lg:h-24 rounded-full object-cover mx-auto"/>
            <p className="mt-2 font-bold text-xs lg:text-md text-gray-300 text-center">{movie.credits.cast[3].name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;