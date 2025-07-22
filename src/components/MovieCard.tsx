interface MovieCardProps {
  id: number;
  title: string;
  poster: string;
  votes: number;
  releaseDate: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, poster, votes, releaseDate }) => {
  return (
    <div key={id}>
      <img
        className="w-full rounded-r-3xl"
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt=""
      />
      <div className="px-0 py-1 pb-5">
        <h2 className="font-bold text-gray-200">{title}</h2>
        <div className="flex justify-between">
        <p className="text-gray-400 text-sm">{releaseDate}</p>
        <p className="text-gray-400 text-sm">Vote({votes})</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;