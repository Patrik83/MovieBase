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
        <div className="flex flex-col">
          <div className="mt-10 mx-6 flex flex-col items-center sm:flex-row lg:flex-row gap-5">
            
            <div className="max-w-[270px]">
              <Carousel 
                data={person.images.profiles}
                Card={PersonCard}
                initialBig={true}
              />
            </div>
            
            <div className="py-4 h-100 overflow-y-auto ml-6">
              <h2 className="font-bolt text-gray-300 text-4xl">{person.name}</h2>
              <p className="py-4 text- text-gray-300">{person.biography}</p>
            </div>
          </div>
          
          <div className="py-10 lg:mx-6">
            <h1 className="text-gray-300 text-4xl px-2 py-4">Movies</h1>
            <div>
              <Carousel 
                data={person.credits.cast}
                Card={MovieCard}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PersonPage;