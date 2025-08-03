import { Link } from "react-router";
import type { Movie } from "../../../types/Movie.types";

interface MovieCardProps {
  item: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ item }) => {
  return (
    <Link to={`/movie/${item.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
        alt=""
      />
    </Link>
  )
}

export default MovieCard;