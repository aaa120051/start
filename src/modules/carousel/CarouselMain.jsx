import Carousel from "./compoments/Carousel";

import imgMalaysia from "@images/carousel/Малайзия.jpg";

const CarouselMain = () => {
  const slides = [
    imgMalaysia,
    imgMalaysia,
    imgMalaysia,
    imgMalaysia,
    imgMalaysia,
  ];

  return (
    <section className="px-4 pt-6 xl:px-0">
      <Carousel slides={slides} />
    </section>
  );
};

export default CarouselMain;
