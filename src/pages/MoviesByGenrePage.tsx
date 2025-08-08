import { useQuery } from "@tanstack/react-query";
import { getByGenre } from "../services/TMDB_API";
import { useParams, useSearchParams } from "react-router";
import ErrorAlert from "../components/ErrorAlert";
import Spinner from "../components/Spinner";
import MovieListCard from "../components/Movie/MovieListCard";
import Pagination from "../components/Pagination";

const MoviesByGenrePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  const page = Number(searchParams.get("page")) || 1;

  const { data: movies, error, isError, isLoading } = useQuery({
    queryKey: (["MoviesByGenre", id, page]),
    queryFn: () => getByGenre(Number(id), page),
  })

  return (
    <>
      {isError && <ErrorAlert message={error.message} />}

      {isLoading && <Spinner />}

      {movies && (
        <div className="mt-10">

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

export default MoviesByGenrePage;