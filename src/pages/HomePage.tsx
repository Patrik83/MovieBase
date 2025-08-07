import { useQuery } from "@tanstack/react-query";
import { getTopRated, getPopular } from "../services/TMDB_API";
import Carousel from "../components/Carousel/Carousel";
import MovieCard from "../components/Carousel/Cards/MovieCard";

const HomePage = () => {

  const { data: popularmovies } = useQuery({
    queryKey: (["popular", 1]),
    queryFn: () => getPopular(1),
  })

  const { data: ratedmovies } = useQuery({
    queryKey: (["rated", 1]),
    queryFn: () => getTopRated(1),
  })

  return (
    <div className="flex flex-col gap-10">
      {popularmovies && (
        <div className="h-[320px]">
          <Carousel 
            data={popularmovies.results}
            Card={MovieCard}
          />
        </div>
      )}
      
      {ratedmovies && (
        <div className="h-[320px]">
          <Carousel 
            data={ratedmovies.results}
            Card={MovieCard}
          />
        </div>
      )}
    </div>
  )
}

export default HomePage;