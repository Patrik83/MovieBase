import { useQuery } from "@tanstack/react-query";
import { getPersonDetails } from "../services/TMDB_API";
import { useParams } from "react-router";
import Carousel from "../components/Carousel/Carousel";

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
          <div className="sm:grid grid-cols-4 lg:mt-10">
            <img 
              src={`https://image.tmdb.org/t/p/original${person.profile_path}`} 
              alt="" 
              className="mx-auto sm:mx-0 px-3 w-72 h-auto lg:w-100"
            />
            
            <div className="px-3 pt-5 sm:col-span-3 sm:px-0 sm:pt-0">
              <h2 className="font-bolt text-center sm:text-left text-gray-300 text-2xl">About</h2>
              <p className="mt-5 text-sm sm:text-base text-gray-300">{person.biography}</p>
            </div>
          </div>  
              
          <div className="sm:grid grid-cols-12 lg:mt-10">
            <div className="sm:col-span-12 sm:col-start-1">
              <h2 className="px-3 text-center sm:text-left sm:pl-12 mt-5 font-bolt text-gray-300 text-2xl lg:text-5xl">Movies</h2>

              <Carousel movies={person.credits.cast} />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default PersonPage;