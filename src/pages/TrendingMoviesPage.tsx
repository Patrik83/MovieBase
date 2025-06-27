import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../services/TMDB_API";
import { useState } from "react";

const TrendingMoviesPage = () => {
  const [page, setPage] = useState(1);

  const { data: movies, error, isError, isLoading } = useQuery({
    queryKey: (["trendingMovies", page]),
    queryFn: () => getTrending(page),
  })

  return (
    <>
    {isError && <p>{error.message}</p>}

    {isLoading && <p>Movies are loading...</p>}

    {movies && (
      <>
        <title>Trending Movies</title>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 pt-3 min-w-[400px]">
          {movies.results.map(movie => (
            <div key={movie.id}>
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
              <div className="px-1 py-0">
                <h2 className="font-bold">{movie.title}</h2>
                <div className="flex justify-between">
                  <p className="text-gray-700 text-sm">{movie.release_date}</p>
                  <p className="text-gray-700 text-sm">Vote({movie.vote_count})</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between px-4 pt-5">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" 
            onClick={() => setPage(prevPage => prevPage - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          <p>Page: {movies.page} / {movies.total_pages}</p>

          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" 
            onClick={() => setPage(prevPage => prevPage + 1)}
            disabled={page === movies.total_pages}
          >
            Next
          </button>
        </div>
      </>
    )}
  </>
  )
}

export default TrendingMoviesPage;