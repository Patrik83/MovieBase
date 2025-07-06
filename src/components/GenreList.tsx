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
      <div className="w-full bg-transparent">
        <div
          className="max-w-screen-xl mx-auto flex flex-wrap justify-start gap-4 text-center pb-2 pt-2 bg-gray-500"
        >
          {genres.map((genre) => (
            <div key={genre.id} className="basis-28">{genre.name}</div>
          ))}
        </div>
      </div>
      )}
    </>
  )
}

export default GenreList;