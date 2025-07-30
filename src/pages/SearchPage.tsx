import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "../services/TMDB_API";
import { useSearchParams } from "react-router";
import Pagination from "../components/Pagination";
import MovieListCard from "../components/Movie/MovieListCard";
import SearchResult from "../components/SearchResult";

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
        <div className="mt-10">
        <h2 className="text-gray-300 px-2 mb-3">Showing {search.total_results} search results for "{query}"...</h2>
          <div className="grid grid-cols-1 px-2">
            {search.results.map(result => (
              <SearchResult key={result.id} movie={result} />
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
        </div>
      )}
    </>
  )
}

export default SearchPage