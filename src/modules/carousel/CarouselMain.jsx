import Carousel from "./compoments/Carousel";

const CarouselMain = () => {
  const slides = [
    "\\src\\assets\\carousel\\Малайзия.jpg",
    "\\src\\assets\\carousel\\Малайзия.jpg",
    "\\src\\assets\\carousel\\Малайзия.jpg",
    "\\src\\assets\\carousel\\Малайзия.jpg",
    "\\src\\assets\\carousel\\Малайзия.jpg",
  ];

  return (
    <div className="px-4 pt-6 xl:px-0">
      <Carousel slides={slides} />
    </div>
  );
};

export default CarouselMain;
