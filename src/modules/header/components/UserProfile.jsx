const UserProfile = () => {
  return (
    <>
      <a href="#">
        <div className="flex items-center justify-center gap-2 bg-(--color-gray-1) rounded-lg h-8 w-[162px] ">
          <img
            src="./icons/header/human.svg"
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
