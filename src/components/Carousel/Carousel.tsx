import { useRef, useState, useEffect } from "react";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

interface CarouselProps<T> {
  data: T[];
  Card: React.ComponentType<{ item: T; size: string }>;
  initialBig?: boolean;
}

const Carousel = <T,>({ data, Card, initialBig }: CarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const activeImage = imageRef.current[activeIndex];

    if (activeImage) {
      activeImage.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  const prev = () => {
    setActiveIndex(prev => prev - 1);
  };

  const next = () => {
    setActiveIndex(prev => prev + 1);
  };
  
  // optional function that makes the active images slightly larger when navigating the carousel
  const handleImageSize = (index: number) => {
    const isBig = index === 0 ? initialBig : index === activeIndex;
  
    return isBig 
      // hardcoded image sizes for responsiveness
      ? "w-[172px] h-[263px] lg:w-[216px] lg:h-[320px]" 
      : "w-[147px] h-[222px] lg:w-[184px] lg:h-[270px]";
  };

  return (
    <div className="carousel-wrapper relative h-[263px] lg:h-[320px]">
      <div className="absolute top-1/2 -translate-y-1/2 -left-10">
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          className="disabled:opacity-50"
        >
          <img
            src={leftArrow}
            alt=""
            className="px-2 h-6 lg:px-2 lg:h-8 cursor-pointer"
          />
        </button>
      </div>
  
      <div className="carousel-list flex space-x-4 overflow-x-auto">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => { imageRef.current[index] = el }}
          >
            <Card
              item={item}
              size={handleImageSize(index)}
            />
          </div>
        ))}
      </div>
  
      <div className="absolute top-1/2 -translate-y-1/2 -right-10">
        <button
          onClick={next}
          disabled={activeIndex === data.length - 1}
          className="disabled:opacity-0"
        >
          <img
            src={rightArrow}
            alt=""
            className="px-2 h-6 lg:px-2 lg:h-8 cursor-pointer"
          />
        </button>
      </div>
    </div>
  );  
};

export default Carousel;