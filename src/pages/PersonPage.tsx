import { useQuery } from "@tanstack/react-query";
import { getPersonDetails } from "../services/TMDB_API";
import { useParams } from "react-router";
import Carousel from "../components/Carousel/Carousel";
import PersonCard from "../components/Carousel/Cards/PersonCard";
import MovieCard from "../components/Carousel/Cards/MovieCard";

const PersonPage = () => {
  const { id } = useParams();
  const { data: person } = useQuery({
    queryKey: ["person", id],
    queryFn: () => getPersonDetails(Number(id)),
  })
  
  return (
    <>
      {person && (
        <>
          <div className="sm:grid grid-cols-12 lg:mt-10">

            <div className="col-span-4">
              <Carousel 
                data={person.images.profiles}
                Card={PersonCard} 
                initialBig={true}
              />
            </div>
            
            <div className="px-3 pt-5 sm:col-span-8 sm:px-0 sm:pt-0">
              <h2 className="font-bolt text-center sm:text-left text-gray-300 text-2xl">About</h2>
              <p className="mt-5 text-sm sm:text-base text-gray-300">{person.biography}</p>
            </div>
          </div>  
              
          <div className="sm:grid grid-cols-12 lg:mt-10">
            <div className="sm:col-span-12 sm:col-start-1">
              <h2 className="px-3 text-center sm:text-left sm:pl-12 mt-5 font-bolt text-gray-300 text-2xl lg:text-5xl">Movies</h2>

              <Carousel 
                data={person.credits.cast}
                Card={MovieCard}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default PersonPage;