import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "../services/TMDB_API";
import { useSearchParams } from "react-router";
import Pagination from "../components/Pagination";
import MovieListCard from "../components/Movie/MovieListCard";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";
  const page = Number(searchParams.get("page")) || 1;

  const { data: search } = useQuery({
    queryKey: ["query", query, page],
    queryFn: () => searchMovie(query, page),
  })
  
  return (
    <>
      {search && (
        <>
          <div className="grid grid-cols-2 px-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:px-0 pt-3">
            {search.results.map(result => (
              <MovieListCard movie={result}/>
            ))}
          </div>

          <Pagination 
            firstPage={page === 1} 
            lastPage={page === search.total_pages} 
            currentPage={search.page}
            totalPages={search.total_pages}
            onPrevPage={() => {
              const previousPage = page - 1;
              setSearchParams({ query, page: String(previousPage) });
            }}
            onNextPage={() => {
              const nextPage = page + 1;
              setSearchParams({ query, page: String(nextPage) });
            }}
          />
        </>
      )}
    </>
  )
}

export default SearchPage