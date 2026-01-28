import human from "@icons/header/human.svg";

const UserProfile = () => {
  return (
    <>
      <a href="#">
        <div className="flex items-center justify-center gap-2 bg-(--color-gray-1) rounded-lg h-8 w-[162px] hover:bg-gray-200 transition-all">
          <img
            src={human}
            alt="person account"
            className="h-4"
          />
          <p className="text-black text-[14px]">Личный кабинет</p>
        </div>
      </a>
    </>
  );
};

export default UserProfile;
