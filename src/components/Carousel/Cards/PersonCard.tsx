import type { Image } from "../../../types/Person.types";

interface PersonCardProps {
  item: Image;
}

const PersonCard: React.FC<PersonCardProps> = ({ item }) => {
  return (
      <img
        src={`https://image.tmdb.org/t/p/w342/${item.file_path}`}
        alt=""
        className="mx-auto sm:mx-0 px-3 w-72 h-auto lg:w-100"
      />
  )
}

export default PersonCard;