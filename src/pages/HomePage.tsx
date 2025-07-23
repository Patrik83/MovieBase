import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../services/TMDB_API";
import CarouselDesktop from "../components/Carousel";

const HomePage = () => {

  const { data: movies } = useQuery({
    queryKey: (["trendingMovies", 1]),
    queryFn: () => getTrending(1),
  })

  return (
    <>
      {movies && <CarouselDesktop movies={movies.results} />}
    </>
  )
}

export default HomePage;