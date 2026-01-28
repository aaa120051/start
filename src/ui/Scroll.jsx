
import scrollLeft from "@icons/scroll/scrollLeft.svg";
import scrollRight from "@icons/scroll/scrollRight.svg";

const Scroll = ({ onPrev, onNext }) => {
  return (
    <div className="hidden lg:flex gap-2">
      <button 
        onClick={onPrev}
        className="bg-(--color-gray-1) rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer"
      >
        <img src={scrollLeft} alt="Previous" />
      </button>
      <button 
        onClick={onNext}
        className="bg-(--color-gray-1) rounded-full h-8 w-8 flex ps-1 items-center justify-center hover:bg-gray-200 transition-all cursor-pointer"
      >
        <img src={scrollRight} alt="Next" />
      </button>
    </div>
  );
};

export default Scroll;