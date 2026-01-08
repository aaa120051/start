import { useState } from "react";
import Button from "./ui/Button";

const ButtonsLine = () => {

  const [active,setActive] = useState ("Туры");
  return (
    <div className="flex gap-0.5 overflow-x-auto scrollbar-hide whitespace-nowrap sm:ps-6 ">
      <Button isActive = {active === "Туры"} onClick={() => setActive("Туры")}>Туры</Button>
      <Button isActive = {active === "Отели"} onClick={() => setActive("Отели")}>Отели</Button>
      <Button isActive = {active === "Авиабилеты"} onClick={() => setActive("Авиабилеты")}>Авиабилеты</Button>
      <Button isActive = {active === "Экскурсионные туры"} onClick={() => setActive("Экскурсионные туры")}>Экскурсионные туры</Button>
    </div>
  );
};

export default ButtonsLine;
