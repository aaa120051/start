const Currencies = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-1">
        <p className="text-[14px]">USD</p>
        <p className="text-black text-[14px] ">100,31</p>
      </div>
      <div className="flex gap-1">
        <p className="text-[14px]">EUR</p>
        <p className="text-black text-[14px] ">105,21</p>
      </div>
      <div className="flex items-center justify-center gap-2  h-8 w-[78px] rounded-lg bg-(--color-gray-1)">
        <p className="text-black text-[14px]">RUB</p>
        <img src="./icons/header/more.svg" alt="exchange rate" className="h-2" />
      </div>
    </div>
  );
};

export default Currencies;
