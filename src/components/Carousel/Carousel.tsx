import { useRef, useState, useEffect } from "react";
import type { Movie } from "../../types/Movie.types";
import CarouselImage from "./CarouselImage";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

interface CarouselProps {
  movies: Movie[];
}

const Carousel: React.FC<CarouselProps> = ({ movies }) => {
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

  const resetInteraction = () => setHasInteracted(false);
  const restoreInteraction = () => {
    if (imageNumber > 0) {
      setHasInteracted(true);
    }
  }

  const prev = () => {
    setHasInteracted(true)
    setImageNumber(prev => prev - 1);
  };

  const next = () => {
    setHasInteracted(true);
    setImageNumber(prev => prev + 1);
  };

  return (
    <div className="carousel-wrapper">
      <div className="flex h-full pt-25">
        <button 
          onClick={prev} 
          disabled={imageNumber === 0} 
          className="disabled:opacity-0"
        >
          <img 
            src={leftArrow} 
            alt="" 
            className="px-4 h-6 lg:px-2 lg:h-8 cursor-pointer" 
          />
        </button>
      </div>
      
      <div className="carousel-list">
        {movies.map((movie, index) => (
          <CarouselImage 
            key={movie.id}
            id={movie.id}
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

      <div className="flex h-full pt-25">
        <button onClick={next} 
          disabled={imageNumber === 19} 
          className="disabled:opacity-0"
        >
          <img 
            src={rightArrow} 
            alt=""
            className="px-4 h-6 lg:px-2 lg:h-8 cursor-pointer" 
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
