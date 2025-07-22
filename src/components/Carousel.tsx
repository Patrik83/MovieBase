import { useRef } from "react";

interface CarouselDesktopProps {
  children: React.ReactNode;
}

const CarouselDesktop: React.FC<CarouselDesktopProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = 162;

  const next = () => {
    containerRef.current?.scrollBy({
      left: scrollByAmount,
      behavior: "smooth",
    });
  };

  const prev = () => {
    containerRef.current?.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-wrapper">
      <button onClick={prev} className="btn-prev">prev</button>

      <div ref={containerRef}>
        <div className="flex">
          {children}
        </div>
      </div>

      <button onClick={next} className="btn-next">next</button>
    </div>
  );
};

export default CarouselDesktop;
