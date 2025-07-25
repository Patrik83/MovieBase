import { useState } from "react";

interface CarouselImageProps {
  imageRef: (el: HTMLDivElement | null) => void;
  imageNumber: number;
  hasInteracted: boolean;
  index: number;
  poster: string;
  onInteractionReset: () => void;
  onInteractionRestore: () => void;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ 
  imageRef, 
  imageNumber, 
  hasInteracted, 
  index, 
  poster, 
  onInteractionReset, 
  onInteractionRestore 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageSize = () => {
    if (isHovered) return "img-big"; // Enlarge image on hover
    if (!hasInteracted) return "img-normal"; // Default image size when no side button navigation has occurred
    return index === imageNumber ? "img-big" : "img-normal"; // Enlarge the image matching the selected index during side button navigation
  }

  return (
    <div 
      ref={imageRef} 
      onMouseEnter={() => {
        // On hover, enlarge that image and reset any other enlarged image to default
        setIsHovered(true);
        onInteractionReset();
      }}
      onMouseLeave={() => {
        // On hover end, restore previous state
        setIsHovered(false);
        onInteractionRestore();
      }}
    >
      <div className={handleImageSize()}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt=""
        />
      </div>
    </div>
  )
}

export default CarouselImage;