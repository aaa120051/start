import Card from "./ui/Card";

import Rixos from "@images/hotels/Rixos Krasnaya Polyana Sochi.png";
import Mayrveda from "@images/hotels/Mayrveda Kislovodsk (1).png";
import SochiParkHotel from "@images/hotels/Сочи Парк Отель.png";
import VelvetSeasons from "@images/hotels/Mayrveda Kislovodsk (2).png";
import MayrvedaKislovodsk from "@images/hotels/Бархатные Сезоны.png";

const CardLine = () => {
  const hotels = [
    {
      id: 1,
      img: Rixos,
      city: "Красная Поляна",
      name: "Rixos Krasnaya Polyana Sochi",
      start: "17 января",
      food: ", полный пансион",
      rating: "",
      price: "367 711 ₽",
    },
    {
      id: 2,
      img: Mayrveda,
      city: "Кисловодск",
      name: "Mayrveda Kislovodsk",
      start: "17 января",
      food: ", полный пансион",
      rating: "",
      price: "181 230 ₽",
    },
    {
      id: 3,
      img: SochiParkHotel,
      city: "Сочи",
      name: "Сочи Парк Отель",
      start: "17 января",
      food: ", завтрак",
      rating: "",
      price: "35 945 ₽",
    },
    {
      id: 4,
      img: VelvetSeasons,
      city: "Сочи",
      name: "Бархатные Сезоны ",
      start: "17 января",
      food: ", без питания",
      rating: "",
      price: "10 989 ₽",
    },
    {
      id: 5,
      img: MayrvedaKislovodsk,
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
