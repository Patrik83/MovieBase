import { getTopRated } from "../services/TMDB_API"
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query"
import ErrorAlert from "../components/ErrorAlert";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

const RatedMoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const { data: movies, error, isError, isLoading } = useQuery({
    queryKey: (["ratedMovies", page]),
    queryFn: () => getTopRated(page),
  })

  return (
    <>
      {isError && <ErrorAlert message={error.message} />}

      {isLoading && <Spinner />}

      {movies && (
        <>
          <title>Rated Movies</title>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-2 pt-3">
            {movies.results.map(movies => (
              <div key={movies.id}>
                <img
                  className="w-full rounded-r-3xl"
                  src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                  alt=""
                />
                <div className="px-0 py-1 pb-5">
                  <h2 className="font-bold text-gray-200">{movies.title}</h2>
                  <div className="flex justify-between">
                    <p className="text-gray-400 text-sm">{movies.release_date}</p>
                    <p className="text-gray-400 text-sm">Vote({movies.vote_count})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Pagination 
            firstPage={page === 1}
            lastPage={page === movies.total_pages}
            currentPage={movies.page}
            totalPages={movies.total_pages}
            onPrevPage={() => {
              const previousPage = page - 1;
              setSearchParams({ page: String(previousPage) });
            }}
            onNextPage={() => {
              const nextPage = page + 1;
              setSearchParams({ page: String(nextPage) });
            }}
          />
        </>
      )}
    </>
  )
}

export default RatedMoviesPage;