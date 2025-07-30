import { getTopRated } from "../services/TMDB_API"
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query"
import ErrorAlert from "../components/ErrorAlert";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import MovieListCard from "../components/Movie/MovieListCard";

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
        <div className="mt-10">
          <title>Rated Movies</title>
          
          <MovieListCard movies={movies.results} />

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
        </div>
      )}
    </>
  )
}

export default RatedMoviesPage;