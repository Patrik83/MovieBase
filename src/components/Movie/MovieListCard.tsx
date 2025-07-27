import { Link } from "react-router";
import type { Movie } from "../../types/Movie.types";

interface MovieListCardProps {
  movie: Movie;
}

const MovieListCard: React.FC<MovieListCardProps> = ({ movie }) => {
  return (
    <div key={movie.id}>
      <Link to={`/movie/${movie.id}`}>
        <img
          className="w-full rounded-r-3xl"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
      </Link>
      <div className="px-0 py-1 pb-5">
        <h2 className="font-bold text-gray-200">{movie.title}</h2>
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm">{movie.release_date}</p>
          <p className="text-gray-400 text-sm">Votes({movie.vote_count})</p>
        </div>
      </div>
    </div>
  )
}

export default MovieListCard;