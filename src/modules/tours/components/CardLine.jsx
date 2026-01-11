import Card from "./ui/Card";

const CardLine = () => {
  const tours = [
    {
      id: 1,
      img: "\\src\\assets\\tours\\Золотой Треугольник.png",
      city: "Индия",
      name: (
        <>
          {"Золотой Треугольник"}
          <br />
          {"(4 дня)"}
        </>
      ),
      duration: "8 дней, 7 ночей",
      price: "80 691 ₽",
    },
    {
      id: 2,
      img: "\\src\\assets\\tours\\Большой Индокитайский Вояж.png",
      city: "Индия",
      name: "Большой Индокитайский Вояж: Вьетнам + Лаос + Ка...",
      duration: "8 дней, 7 ночей",
      price: "459 989 ₽",
    },
    {
      id: 3,
      img: "\\src\\assets\\tours\\Калининград.png",
      city: "Каллинингад",
      name: (
        <>
          {"Калининград: город"}
          <br />
          {"в центре Европы"}
        </>
      ),
      duration: "8 дней, 7 ночей",
      price: "32 691 ₽",
    },
    {
      id: 4,
      img: "\\src\\assets\\tours\\Калоритный Вьетнам.png",
      city: "Вьетнам",
      name: "Колоритный Центральный и Южный Вьетнам",
      duration: "8 дней, 7 ночей",
      price: "340 614 ₽",
    },
    {
      id: 5,
      img: "\\src\\assets\\tours\\Большой Индокитайский Вояж.png",
      city: "Индия",
      name: "Большой Индокитайский Вояж: Вьетнам + Лаос + Ка...",
      duration: "8 дней, 7 ночей",
      price: "459 989 ₽",
    },
  ];

  return (
    <div className="pt-4 pb-8 lg:pt-6">
      <div className="tours-cards flex gap-6 overflow-x-auto scrollbar-hide">
        {tours.map((tour) => (
          <Card
            key={tour.id}
            img={tour.img}
            city={tour.city}
            name={tour.name}
            duration={tour.duration}
            price={tour.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CardLine;
