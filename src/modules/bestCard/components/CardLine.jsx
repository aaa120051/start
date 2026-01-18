import Card from "./ui/Card";

import IndiaImg from "@images/bestCard/Треугольник.png";
import RussiaImg from "@images/bestCard/Rixos.png";
import UnitedKingdomImg from "@images/bestCard/Брайтон.png";
import KaliningradImg from "@images/bestCard/Калининград.png";
import VietnamImg from "@images/bestCard/Вьетнам.png";
import star from "@icons/cards/star.svg";

const CardLine = () => {
  const cards = [
    {
      id: 1,
      img: IndiaImg,
      city: "Индия",
      name: (
        <>
          {"Золотой Треугольник"}
          <br />
          {"(4 дня)"}
        </>
      ),
      additionally: "Экскурсионный тур",
      price: "80 691 ₽",
      forPrice: " / за номер",
    },
    {
      id: 2,
      img: RussiaImg,
      city: "Россия",
      name: (
        <>
          {`Rixos Krasnaya Polyana`} <br /> {`Sochi`}
        </>
      ),
      additionally: (
        <div className="flex gap-2">
          <p>Отель</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((key) => (
              <img
                key={key}
                src= {star}
                alt="star"
                className="h-[13px]"
              />
            ))}
          </div>
        </div>
      ),
      price: "459 989 ₽",
      forPrice: " / за номер",
    },
    {
      id: 3,
      img: UnitedKingdomImg,
      city: "Великобритания",
      name: (
        <>
          {`Брайтон `} <br /> {`(Business Courses)`}
        </>
      ),
      additionally: "St Giles International, Английский язык",
      price: "32 691 ₽",
      forPrice: " / за 7 дней",
    },
    {
      id: 4,
      img: KaliningradImg,
      city: "Каллинингад",
      name: (
        <>
          {`Калининград: город `} <br /> {`в центре Европы`}
        </>
      ),
      additionally: "Экскурсионный тур",
      price: "32 691 ₽",
      forPrice: " / за номер",
    },
    {
      id: 5,
      img: VietnamImg,
      city: "Вьетнам",
      name: "Большой Индокитайский Вояж: Вьетнам + Лаос + Ка...",
      additionally: "Экскурсионный тур",
      price: "340 614 ₽",
      forPrice: "",
    },
  ];

  return (
    <div className="pt-4 lg:pt-6">
      <div className="best-cards flex gap-6 overflow-x-auto scrollbar-hide">
        {cards.map((card) => (
          <Card
            key={card.id}
            img={card.img}
            city={card.city}
            name={card.name}
            additionally={card.additionally}
            price={card.price}
            forPrice={card.forPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default CardLine;
