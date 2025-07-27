import type { MovieDetails as MovieDetailsType } from "../../services/TMDB_API";

interface MovieDetailsProps {
  movie: MovieDetailsType;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div className="grid grid-cols-3 gap-16">
      <div className="col-span-1">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="col-span-2 bg-white p-4 space-y-10">
        <h2 className="text-7xl font-bold text-gray-700">{movie.title}</h2>
        <p className="text-xl text-gray-700">{movie.overview}</p>

        <div className="flex">
          <div className="p-5 text-center">
            <img src={`https://image.tmdb.org/t/p/w92/${movie.credits.cast[0].profile_path}`} alt="" className="w-24 h-24 rounded-full object-cover mx-auto"/>
            <p className="mt-2 text-md">{movie.credits.cast[0].name}</p>
          </div>
          
          <div className="p-5 text-center">
            <img src={`https://image.tmdb.org/t/p/w92/${movie.credits.cast[1].profile_path}`} alt="" className="w-24 h-24 rounded-full object-cover mx-auto"/>
            <p className="mt-2 text-md">{movie.credits.cast[1].name}</p>
          </div>
          
          <div className="p-5 text-center">
            <img src={`https://image.tmdb.org/t/p/w92/${movie.credits.cast[2].profile_path}`} alt="" className="w-24 h-24 rounded-full object-cover mx-auto"/>
            <p className="mt-2 text-md">{movie.credits.cast[2].name}</p>
          </div>

          <div className="p-5 text-center">
            <img src={`https://image.tmdb.org/t/p/w92/${movie.credits.cast[3].profile_path}`} alt="" className="w-24 h-24 rounded-full object-cover mx-auto"/>
            <p className="mt-2 text-md">{movie.credits.cast[3].name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;