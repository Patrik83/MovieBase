import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../services/TMDB_API";
import Pagination from "../components/Pagination";
import ErrorAlert from "../components/ErrorAlert";
import Spinner from "../components/Spinner";
import { useSearchParams } from "react-router";
import MovieCard from "../components/MovieCard";

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
              <MovieCard 
                id={movie.id} 
                title={movie.title} 
                poster={movie.poster_path} 
                votes={movie.vote_count} 
                releaseDate={movie.release_date}
              />
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