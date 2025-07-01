import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/TMDB_API";

const GenreList = () => {
  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: () => getGenres(),
  })

  return (
    <>
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