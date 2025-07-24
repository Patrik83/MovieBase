interface CarouselImageProps {
  imageRef: (el: HTMLDivElement | null) => void;
  imageNumber: number;
  hasInteracted: boolean;
  index: number;
  poster: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ imageRef, imageNumber, hasInteracted, index, poster }) => {

  const handleImage = () => {
    if (!hasInteracted) return "normal";

    return index === imageNumber ? "big" : "normal";
  }

  return (
    <div ref={imageRef} style={{ scrollMarginLeft: "70px" }}>
      <div className={`transition-all duration-300 ${handleImage()}`}>
        <img
          src={`https://image.tmdb.org/t/p/w154/${poster}`}
          alt=""
        />
      </div>
    </div>
  )
}

export default CarouselImage;