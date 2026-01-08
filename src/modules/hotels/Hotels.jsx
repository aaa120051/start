import ButtonsLine from "./components/ButtonsLine";
import CardLine from "./components/CardLine";


const Hotels = () => {

  return (
    <div className="ps-4 pt-11 lg:pt-20 xl:ps-0 ">
      <h2 className=" text-black">Популярные отели</h2>
      <ButtonsLine />
      <CardLine />
    </div>
  );
};

export default Hotels;
