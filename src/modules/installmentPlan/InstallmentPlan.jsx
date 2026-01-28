import installmentPlan from "@images/installmentPlan/installmentPlan.png";

const InstallmentPlan = () => {
  return (
    <section className="h-[235px] mt-11 flex flex-col  bg-(--color-gray-1) pe-4 ps-4 mx-4 rounded-2xl md:h-[152px] md:flex-row md:items-center lg:mt-20 lg:pe-8 xl:mx-0">
      <img
        src= {installmentPlan}
        alt="Рассрочка"
        className="me-6 ms-4 hidden lg:block"
      />
      <div className="py-4 pe-4 md:py-0">
        <h2 className="text-black leading-7 pb-0 md:pb-3 whitespace-nowrap md:whitespace-normal">
          Подпишитесь на рассылку
        </h2>
        <p className="font-normal pt-1">
          И узнавайте первыми о горячие новости, лучшие цены и предложения
        </p>
      </div>
      <form className="flex flex-col gap-4 md:gap-0 md:h-[232px] md:flex-row md:ms-auto md:items-center">
        <input
          type="email"
          placeholder="Ваш Email"
          className="h-12 bg-white rounded-lg w-[298px] ps-4 me-4 cursor-pointer"
        />
        <button
          type="button"
          className="h-12 text-white bg-(--color-accent) py-3 rounded-lg w-[152px] cursor-pointer"
        >
          Подписаться
        </button>
      </form>
    </section>
  );
};

export default InstallmentPlan;
