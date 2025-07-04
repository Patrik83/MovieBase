import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "../services/TMDB_API";
import { useSearchParams } from "react-router";
import Pagination from "../components/Pagination";

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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-2 pt-3">
            {search.results.map(result => (
              <div key={result.id}>
                <img
                  className="w-full rounded-r-3xl"
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt=""
                />
                <div className="px-0 py-1 pb-5">
                  <h2 className="font-bold text-gray-200">{result.title}</h2>
                  <div className="flex justify-between">
                    <p className="text-gray-400 text-sm">{result.release_date}</p>
                    <p className="text-gray-400 text-sm">Vote({result.vote_count})</p>
                  </div>
                </div>
              </div>
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