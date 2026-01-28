import Search from "@/modules/search/Search";
import Header from "@/modules/header/Header";
import Hotels from "@/modules/hotels/Hotels";
import ImageSeparator from "@/modules/ImageSeparator/ImageSeparator";
import Tours from "@/modules/tours/Tours";
import CarouselMain from "@/modules/carousel/CarouselMain";
import Education from "@/modules/education/Education";
import SvgLine from "@/modules/svgLine/SvgLine";
import BestCard from "@/modules/bestCard/BestCard";
import Advantages from "@/modules/advantages/Advantages";
import News from "@/modules/news/News";
import Partners from "@/modules/partners/Partners";
import InstallmentPlan from "@/modules/installmentPlan/installmentPlan";
import Footer from "@/modules/footer/Footer";

const HomePage = () => {
  return (
    <div className="max-w-7xl m-auto">
      <Header />
      <main>
        <Search />
        <CarouselMain />
        <SvgLine />
        <BestCard />
        <ImageSeparator />
        <Hotels />
        <Tours />
        <Education />
        <ImageSeparator />
        <Advantages />
        <News />
        <Partners />
        <ImageSeparator />
        <InstallmentPlan />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
