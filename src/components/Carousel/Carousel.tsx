import { useRef, useState, useEffect } from "react";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

interface CarouselProps<T> {
  data: T[];
  Card: React.ComponentType<{ item: T }>;
  initialBig?: boolean;
}

const Carousel = <T,>({ data, Card, initialBig }: CarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [enableScrollMargin, setEnableScrollMargin] = useState(false);
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
    setEnableScrollMargin(false);
    setActiveIndex(prev => prev - 1);
  };

  const next = () => {
    setEnableScrollMargin(true);
    setActiveIndex(prev => prev + 1);
  };

  const handleImageSize = (index: number) => {
    // use "img-big" on the first image as default, if initialBig is set to true
    if (index === 0) {
      return initialBig ? "img-big" : "img-normal";
    }
    // for all other images, only apply "img-big" to the active image
    return index === activeIndex ? "img-big" : "img-normal";
  };
  
  return (
    <div className="carousel-wrapper">
      <div className={`${initialBig ? "absolute bottom-1/2 -left-10" : "absolute bottom-56 -left-"}`}>
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

      <div className="carousel-list">
        {data.map((item, index) => (
          <div 
            key={index}
            ref={(el) => { imageRef.current[index] = el }}
            className={`${
              // Apply a scroll margin when scrolling forward past the previous image
              enableScrollMargin && activeIndex > 1
                ? "scroll-ml-[40px]" // scrolling forward: compensate for image size difference
                : "scroll-ml-[0px]"  // scrolling backward: no margin needed
            }`}
          >
            <div className={handleImageSize(index)}>
              <Card item={item} />
            </div>
          </div>  
        ))}
      </div>

      <div className={`${initialBig ? "absolute bottom-1/2 -right-10" : "absolute bottom-56 -right-12"}`}>
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