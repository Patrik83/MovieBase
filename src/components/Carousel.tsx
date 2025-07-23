import { useRef, useState, useEffect } from "react";
import type { Movie } from "../services/TMDB_API";

interface CarouselDesktopProps {
  movies: Movie[];
}

const CarouselDesktop: React.FC<CarouselDesktopProps> = ({ movies }) => {
  const [imageNumber, setImageNumber] = useState(0);
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

  const next = () => {
    setImageNumber(prev => prev + 1);
  };

  const prev = () => {
    setImageNumber(prev => prev - 1);
  };

  return (
    <div className="carousel-wrapper">
      <button
        onClick={prev}
        disabled={imageNumber === 0}
        className="btn-prev disabled:opacity-50"
      >
        Prev
      </button>
      
      <div className="flex">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            ref={(el) => {
              imageRef.current[index] = el;
            }}
            style={{ scrollMarginLeft: "70px" }}
          >
            <div className={`transition-all duration-300 ${index === imageNumber ? "big" : "normal"}`}>
              <img
                src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={next}
        disabled={imageNumber === 19}
        className="btn-next disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default CarouselDesktop;
