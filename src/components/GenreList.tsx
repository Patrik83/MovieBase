import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/TMDB_API";
import ErrorAlert from "./ErrorAlert";
import Spinner from "./Spinner";

const GenreList = () => {
  const { data: genres, error, isError, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: () => getGenres(),
  })

  return (
    <>
      {isError && <ErrorAlert message={error.message} />}

      {isLoading && <Spinner />}

      {genres && (
        <div className="flex flex-wrap justify-start gap-4 text-center bg-gray-300">
          {genres.map(genre => (
            <div key={genre.id} className="basis-28">{genre.name}</div>
          ))}
        </div>
      )}
    </>
  )
}

export default GenreList;