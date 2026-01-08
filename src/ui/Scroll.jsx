const Scroll = ({ onPrev, onNext }) => {
  return (
    <div className="hidden lg:flex gap-2">
      <button 
        onClick={onPrev}
        className="bg-(--color-gray-1) rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-200 transition-all"
      >
        <img src="\icons\scroll\scrollLeft.svg" alt="Previous" />
      </button>
      <button 
        onClick={onNext}
        className="bg-(--color-gray-1) rounded-full h-8 w-8 flex ps-1 items-center justify-center hover:bg-gray-200 transition-all"
      >
        <img src="\icons\scroll\scrollRight.svg" alt="Next" />
      </button>
    </div>
  );
};

export default Scroll;