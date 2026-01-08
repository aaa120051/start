import Carousel from "./compoments/Carousel"

const CarouselMain = () => {

  const slides = [
    "\\images\\carousel\\Малайзия.jpg",
    "\\images\\carousel\\Малайзия.jpg",
    "\\images\\carousel\\Малайзия.jpg",
    "\\images\\carousel\\Малайзия.jpg",
    "\\images\\carousel\\Малайзия.jpg",
  ]

  return (
    <div className="px-4 pt-6 xl:px-0">
      <Carousel slides={slides}/>
    </div>
  )
}

export default CarouselMain
