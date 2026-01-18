
import rate from "@icons/header/more.svg";

const Currencies = () => {
  return (
    <div className="flex gap-4 items-center max-[768px]:justify-between">
      <div className="flex gap-4">
        <div className="flex gap-1">
          <p className="text-[14px] max-[1100px]:text-[16px]">USD</p>
          <p className="text-black text-[14px]">100,31</p>
        </div>
        <div className="flex gap-1">
          <p className="text-[14px] max-[1100px]:text-[16px]">EUR</p>
          <p className="text-black text-[14px] ">105,21</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2  h-8 w-[78px] rounded-lg bg-(--color-gray-1)">
        <p className="text-black text-[14px] max-[1100px]:text-[16px]">RUB</p>
        <img
          src={rate}
          alt="exchange rate"
          className="h-2"
        />
      </div>
    </div>
  );
};

export default Currencies;
