import { useRef, useState, useEffect } from "react";
import type { Movie } from "../services/TMDB_API";
import CarouselImage from "./CarouselImage";

interface CarouselDesktopProps {
  movies: Movie[];
}

const CarouselDesktop: React.FC<CarouselDesktopProps> = ({ movies }) => {
  const [imageNumber, setImageNumber] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const imageRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentImage = imageRef.current[imageNumber];

    if (currentImage) {
      currentImage.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  }, [imageNumber]);

  // Manage interaction state to prevent multiple images from appearing active simultaneously during hover
  const resetInteraction = () => setHasInteracted(false);
  const restoreInteraction = () => setHasInteracted(true);

  // navigate to previous image and activate interaction
  const prev = () => {
    setHasInteracted(true)
    setImageNumber(prev => prev - 1);
  };

  // navigate to next image and activate interaction
  const next = () => {
    setHasInteracted(true);
    setImageNumber(prev => prev + 1);
  };

  return (
    <div className="carousel-wrapper">
      <div>
        <button
          onClick={prev}
          disabled={imageNumber === 0}
          className="btn-prev disabled:opacity-50"
        >
          
        </button>
      </div>
      
      <div className="carousel-list">
        {movies.map((movie, index) => (
          <CarouselImage 
            key={movie.id}
            index={index} 
            imageRef={el => imageRef.current[index] = el} 
            hasInteracted={hasInteracted}
            imageNumber={imageNumber}
            poster={movie.poster_path}
            onInteractionReset={resetInteraction}
            onInteractionRestore={restoreInteraction}
          />
          ))}
      </div>

      <div>
        <button
          onClick={next}
          disabled={imageNumber === 19}
          className="btn-next disabled:opacity-50"
        >
          
        </button>
      </div>
    </div>
  );
};

export default CarouselDesktop;
