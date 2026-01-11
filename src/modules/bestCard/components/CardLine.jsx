import Card from "./ui/Card";

const CardLine = () => {
  const cards = [
    {
      id: 1,
      img: "/src/assets/bestCard/Треугольник.png",
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
      img: "/src/assets/bestCard/Rixos.png",
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
                src="\icons\cards\star.svg"
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
      img: "/src/assets/bestCard/Брайтон.png",
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
      img: "/src/assets/bestCard/Калининград.png",
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
      img: "/src/assets/bestCard/Вьетнам.png",
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
