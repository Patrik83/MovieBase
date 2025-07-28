import { useQuery } from "@tanstack/react-query";
import { getTopRated, getPopular } from "../services/TMDB_API";
import Carousel from "../components/Carousel/Carousel";

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
    <>
      {popularmovies && <Carousel movies={popularmovies.results} />}
      {ratedmovies && <Carousel movies={ratedmovies.results} />}
    </>
  )
}

export default HomePage;