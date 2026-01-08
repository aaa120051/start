import { useState } from "react";
import Button from "./ui/Button";
import Scroll from "@/ui/Scroll";

const ButtonsLine = () => {
  const [active,setActive] = useState ("Россия");
  const scrollCards = (direction) => {
    const container = document.querySelector(".hotels-cards");
    if (container) {
      const scrollAmount = 326;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
  <div className="flex justify-between items-center pt-4 lg:pt-6">
    <div className="flex gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap ">
      <Button isActive = {active === "Россия"} onClick={() => setActive("Россия")}>Россия</Button>
      <Button isActive = {active === "ОАЭ"} onClick={() => setActive("ОАЭ")}>ОАЭ</Button>
      <Button isActive = {active === "Мальдивы"} onClick={() => setActive("Мальдивы")}>Мальдивы</Button>
      <Button isActive = {active === "Египет"} onClick={() => setActive("Египет")}>Египет</Button>
      <Button isActive = {active === "Кипр"} onClick={() => setActive("Кипр")}>Кипр</Button>
      <Button isActive = {active === "Турция"} onClick={() => setActive("Турция")}>Турция</Button>
      <Button isActive = {active === "Азербайджан"} onClick={() => setActive("Азербайджан")}>Азербайджан</Button>
      <Button isActive = {active === "Индонезия"} onClick={() => setActive("Индонезия")}>Индонезия</Button>
      <Button isActive = {active === "Тайланд"} onClick={() => setActive("Тайланд")}>Тайланд</Button>
    </div>

    <Scroll
      onPrev={() => scrollCards("left")}
      onNext={() => scrollCards("right")}
    />
  </div>
  );
};

export default ButtonsLine;
