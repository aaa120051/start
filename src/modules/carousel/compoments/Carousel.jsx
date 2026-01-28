import Scroll from "@/ui/Scroll";
import { useState } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[392px] overflow-hidden shrink-0 ">
      <div className="flex h-full transition-transform duration-300">
        {slides.map((source, index) => {
          return (
            <div
              key={`slide-${index}`}
              className="shrink-0 w-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <a href="#">
                <img
                  src={source}
                  className="object-cover rounded-2xl object-[center_90%] w-full h-full"
                  alt={`Slide ${index + 1}`}
                />
              </a>
            </div>
          );
        })}
      </div>

      <div className="absolute w-[104px] h-8 top-[344px] left-0 right-0 mx-auto flex items-center justify-center bg-(--color-gray-1) rounded-[18px] px-4 lg:left-4 lg:right-auto lg:mx-0">
        {slides.map((_, index) => (
          <div 
            key={`indicator-${index}`}
            className="p-1" 
            onClick={() => setCurrentSlide(index)}
          >
            <button
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === index
                  ? "bg-(--color-accent)"
                  : "bg-(--color-gray-3)"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="absolute top-[344px] right-4 flex gap-2 items-center">
        <Scroll onPrev={prevSlide} onNext={nextSlide} />
      </div>
    </div>
  );
};

export default Carousel;