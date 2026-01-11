import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Currencies from "./Currencies";
import NavBar from "./NavBar";
import Feedback from "./Feedback";

const Burger = () => {
  const [open, isOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <div className="w-12 h-12 bg-(--color-gray-1) rounded-lg text-(--color-accent)">
      <Hamburger size={18} toggled={open} toggle={isOpen} />
      {open && (
        <div className="p-4 fixed z-10 top-0 left-0 w-full h-full bg-white overflow-y-auto flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center min-[1100px]:border-r border-(--color-gray-5) min-[1100px]:h-[100px]">
              <img
                src="/src/assets/logo/logo.png"
                alt="logo"
                className="min-[1100px]:pe-6 max-[500px]:w-[161px]"
              />
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-(--color-gray-1) rounded-lg text-(--color-accent)">
              <Hamburger size={18} toggled={open} toggle={isOpen} />
            </div>
          </div>
          <div className="pt-6 pb-14 text-(--color-gray-5)">
            <Currencies />
          </div>
          <NavBar />
          <div className="mt-auto pt-16">
            <Feedback />
          </div>
        </div>
      )}
    </div>
  );
};

export default Burger;
