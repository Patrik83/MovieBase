import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../services/TMDB_API";
import Pagination from "../components/Pagination";
import ErrorAlert from "../components/ErrorAlert";
import Spinner from "../components/Spinner";
import { useSearchParams } from "react-router";

const TrendingMoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const { data: movies, error, isError, isLoading } = useQuery({
    queryKey: (["trendingMovies", page]),
    queryFn: () => getTrending(page),
  })

  return (
    <>
      {isError && <ErrorAlert message={error.message} />}

      {isLoading && <Spinner />}

      {movies && (
        <>
          <title>Trending Movies</title>
          <div className="grid grid-cols-2 px-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:px-0 pt-3">
            {movies.results.map(movie => (
              <div key={movie.id}>
                <img
                  className="w-full rounded-r-3xl"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
                <div className="px-0 py-1 pb-5">
                  <h2 className="font-bold text-gray-200">{movie.title}</h2>
                  <div className="flex justify-between">
                    <p className="text-gray-400 text-sm">{movie.release_date}</p>
                    <p className="text-gray-400 text-sm">Vote({movie.vote_count})</p>
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

export default TrendingMoviesPage;