import Card from "./ui/Card";

import BrightonBusinessCoursesOne from "@images/education/Брайтон (1).png";
import EnglishInCyprusLimassol from "@images/education/English in Cyprus Limassol.png";
import DiscoverySummerCollingham from "@images/education/Discovery Summer Коллингем.png";
import SprachcaffeBeijing from "@images/education/Sprachcaffe Пекин.png";
import BrightonBusinessCoursesTwo from "@images/education/Брайтон (2).png";

const CardLine = () => {
  const courses = [
    {
      id: 1,
      img: BrightonBusinessCoursesOne,
      city: "Великобритания",
      name: "Брайтон (Business Courses)",
      language: "Английский",
      start: ", 17 января",
      price: "119 150 ₽",
      group: "Языковые курсы",
      institution: "St Giles International",
    },
    {
      id: 2,
      img: EnglishInCyprusLimassol,
      city: "Кипр",
      name: "English in Cyprus Limassol",
      language: "Английский",
      start: ", 17 января",
      price: "60 691 ₽",
      group: "Семейные программы",
      institution: "English in Cyprus",
    },
    {
      id: 3,
      img: DiscoverySummerCollingham,
      city: "Великобритания",
      name: "Discovery Summer Коллингем",
      language: "Английский",
      start: ", 17 января",
      price: "80 691 ₽",
      group: "Семейные программы",
      institution: "Discovery Summer",
    },
    {
      id: 4,
      img: SprachcaffeBeijing,
      city: "Китай",
      name: "Sprachcaffe Пекин",
      language: "Английский",
      start: ", 17 января",
      price: "115 210 ₽",
      group: "Языковые курсы",
      institution: "Sprachcaffe Languages Plus",
    },
    {
      id: 5,
      img: BrightonBusinessCoursesTwo,
      city: "Великобритания",
      name: "Брайтон (Business Courses)",
      language: "Английский",
      start: ", 17 января",
      price: "80 691 ₽",
      group: "Языковые курсы",
      institution: "St Giles International",
    },
  ];

  return (
    <div className="pt-4 pb-6 lg:pb-8 lg:pt-6">
      <div className="education-cards flex gap-6 overflow-x-auto scrollbar-hide">
        {courses.map((course) => (
          <Card
            key={course.id}
            img={course.img}
            city={course.city}
            name={course.name}
            language={course.language}
            start={course.start}
            price={course.price}
            group={course.group}
            institution={course.institution}
          />
        ))}
      </div>
    </div>
  );
};

export default CardLine;
