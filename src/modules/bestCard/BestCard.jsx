import CardLine from "./components/CardLine";
import Scroll from "@/ui/Scroll";

const BestCard = () => {
  const scrollCards = (direction) => {
    const container = document.querySelector('.best-cards');
    if (container) {
      const scrollAmount = 326; 
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="ps-4 pt-11 lg:pt-20 xl:ps-0">
      <div className="flex justify-between items-center">
        <h2 className="text-black">Лучшие предложения</h2>
        <Scroll 
          onPrev={() => scrollCards('left')} 
          onNext={() => scrollCards('right')} 
        />
      </div>
      <CardLine />
    </section>
  );
};

export default BestCard;
