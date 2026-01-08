import Card from "./ui/Card";

const CardLine = () => {
  const hotels = [
    {
      id: 1,
      img: "\\images\\hotels\\Rixos Krasnaya Polyana Sochi.png",
      city: "Красная Поляна",
      name: "Rixos Krasnaya Polyana Sochi",
      start: "17 января",
      food: ", полный пансион",
      rating: "",
      price: "367 711 ₽",
    },
    {
      id: 2,
      img: "\\images\\hotels\\Mayrveda Kislovodsk (1).png",
      city: "Кисловодск",
      name: "Mayrveda Kislovodsk",
      start: "17 января",
      food: ", полный пансион",
      rating: "",
      price: "181 230 ₽",
    },
    {
      id: 3,
      img: "\\images\\hotels\\Сочи Парк Отель.png",
      city: "Сочи",
      name: "Сочи Парк Отель",
      start: "17 января",
      food: ", завтрак",
      rating: "",
      price: "35 945 ₽",
    },
    {
      id: 4,
      img: "\\images\\hotels\\Mayrveda Kislovodsk (2).png",
      city: "Сочи",
      name: "Бархатные Сезоны ",
      start: "17 января",
      food: ", без питания",
      rating: "",
      price: "10 989 ₽",
    },
    {
      id: 5,
      img: "\\images\\hotels\\Бархатные Сезоны.png",
      city: "Кисловодск",
      name: "Mayrveda Kislovodsk",
      start: "17 января",
      food: ", полный пансион",
      rating: "",
      price: "367 711 ₽",
    },
  ];

  return (
    <div className="pt-4 lg:pt-6">
      <div className="hotels-cards flex gap-6 overflow-x-auto scrollbar-hide">
        {hotels.map((hotel) => (
          <Card
            key={hotel.id}
            img={hotel.img}
            city={hotel.city}
            name={hotel.name}
            start={hotel.start}
            food={hotel.food}
            price={hotel.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CardLine;
