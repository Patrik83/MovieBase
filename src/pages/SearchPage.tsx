import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "../services/TMDB_API";
import { useSearchParams } from "react-router";
import Pagination from "../components/Pagination";
import { useState } from "react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const query = searchParams.get("query") ?? "";

  const { data: search } = useQuery({
    queryKey: ["query", query, page],
    queryFn: () => searchMovie(query, page),
  })
  
  return (
    <>
      {search && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 pt-3 min-w-[400px]">
            {search.results.map(result => (
              <div key={result.id}>
                <img
                  className="w-full"
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt=""
                />
                <div className="px-1 py-0">
                  <h2 className="font-bold">{result.title}</h2>
                  <div className="flex justify-between">
                    <p className="text-gray-700 text-sm">{result.release_date}</p>
                    <p className="text-gray-700 text-sm">Vote({result.vote_count})</p>
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
            onPrevPage={() => setPage(prevValue => prevValue - 1)}
            onNextPage={() => setPage(prevValue => prevValue + 1)}
          />
        </>
      )}
    </>
  )
}

export default SearchPage