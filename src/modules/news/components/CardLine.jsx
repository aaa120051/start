import Card from "./ui/Card";

const CardLine = () => {
  const news = [
    {
      id: 1,
      name: "Обучение в Великобритании с BSI Group – школы, программы и цены",
      additionally: "BSI GROUP предлагает широкий выбор круглогодичных и каникулярных образовательных туров в Великобританию",
      date: "21.01.25"
    },
    {
      id: 2,
      name: "Планируем путешествия по Европе и Азии с BSI GROUP",
      additionally: "С BSI Group открыты и Запад, и Восток – более тысячи туров по 20-ти зарубежным направлениям доступны к бронированию на зиму и сезон весна-лето 2025",
      date: "13.01.25"
    },
    {
      id: 3,
      name: "Время путешествий по Азии – Шри-Ланка, Вьетнам, Малайзия, Индия, Япония",
      additionally: "Туроператор BSI Group предлагает широкий ассортимент экскурсионных туров по Азии",
      date: "02.12.2024"
    },
    {
      id: 4,
      name: "Новогодние туры: 12 стран – более 1000 маршрутов!",
      additionally: "BSI GROUP приглашает провести Рождественские каникулы и встретить Новый 2025 год ярко, насыщенно и интересно! ",
      date: "27.10.2024"
    },
    {
      id: 5,
      name: "Время путешествий по Азии. Новинки сезона!",
      additionally: "BSI GROUP предлагает широкий выбор круглогодичных и каникулярных образовательных туров в Великобританию",
      date: "21.01.25"
    },
  ];

  return (
    <div className="pt-4 pb-8 lg:pt-6">
      <div className="news-cards flex gap-6 overflow-x-auto scrollbar-hide">
        {news.map((post) => (
          <Card
            key={post.id}
            name={post.name}
            additionally={post.additionally}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default CardLine;
