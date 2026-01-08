import Input from "./ui/Input";

const InputsLine = () => {
  return (
    <div className="flex flex-col gap-2 h-[353px] bg-(--color-accent) p-4 md:p-6 md:h-24 md:rounded-2xl md:flex-row md:gap-0 md:justi">
      <div className="grow"><Input label="Откуда" baseText="Москва" addClass="md:rounded-l-lg"/></div>
      <div className="grow"><Input label="Страна, город, отель" addClass="md:border-l md:border-(--color-gray-3)"/></div>
      <div className="grow"><Input label="даты вылета" addClass="md:border-l md:border-(--color-gray-3)"/></div>
      <div className="flex gap-2 md:gap-0">
        <div className="grow"><Input label="Ночей" baseText="от 5 до 12" addClass="md:border-l md:border-(--color-gray-3)"/></div>
        <div className="grow"><Input label="Туристы" baseText="2 взрослых" addClass="md:rounded-r-lg md:border-l md:border-(--color-gray-3)"/></div>
      </div>
      <div className="grow"><button className="bg-white text-black rounded-lg h-12 mt-2 w-full md:w-[100px] md:ms-4 md:mt-0 lg:w-[152px]">Найти</button></div>

    </div>

  );
};

export default InputsLine;
