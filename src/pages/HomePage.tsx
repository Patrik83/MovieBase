import { useQuery } from "@tanstack/react-query";
import { getTopRated, getTrending } from "../services/TMDB_API";
import CarouselDesktop from "../components/Carousel";

const HomePage = () => {

  const { data: trendingmovies } = useQuery({
    queryKey: (["trending", 1]),
    queryFn: () => getTrending(1),
  })

  const { data: ratedmovies } = useQuery({
      queryKey: (["rated", 1]),
      queryFn: () => getTopRated(1),
    })

  return (
    <>
      {trendingmovies && <CarouselDesktop movies={trendingmovies.results} />}
      {ratedmovies && <CarouselDesktop movies={ratedmovies.results} />}
    </>
  )
}

export default HomePage;