import Burger from "./components/Burger";
import Currencies from "./components/Currencies";
import Feedback from "./components/Feedback";
import NavBar from "./components/NavBar";
import UserProfile from "./components/UserProfile";

const Header = () => {
  return (
    <div className="px-4 pt-4 min-[1100px]:px-0">
      <div className="flex justify-between">
        <a href="/">
          <div className="flex items-center min-[1100px]:border-r border-(--color-gray-5) min-[1100px]:h-[100px]">
            <img
              src="./images/logo/logo.png"
              alt="logo"
              className="min-[1100px]:pe-6 max-[500px]:w-[161px]"
            />
          </div>
        </a>
        <div className="hidden min-[1100px]:flex max-w-[962px] w-full  flex-col justify-between pl-6 h-[84px] min-[1100px]:mt-2">
          <div className="flex justify-between">
            <div>
              <Currencies />
            </div>
            <Feedback />
          </div>

          <div className="flex justify-between items-center">
            <NavBar />
            <UserProfile />
          </div>
        </div>

        <div className="flex items-center  min-[1100px]:hidden">
          <div className="w-12 h-12 flex items-center justify-center me-2 bg-(--color-gray-1) rounded-lg sm:w-[162px] gap-2">
            <img
              src="\icons\header\human.svg"
              alt="person account"
              className="h-4"
            />
            <p className="hidden font-medium sm:inline text-black text-[14px]">
              Личный кабинет
            </p>
          </div>

          <Burger />
        </div>
      </div>
    </div>
  );
};

export default Header;
