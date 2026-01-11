import React from "react";

const Advantages = () => {
  return (
    <div className="px-4 xl:px-0">
      <h2 className="text-black pt-11 xl:pt-20">Наши преимущества</h2>
      <div className="pt-4 xl:pt-6 flex flex-col gap-4 text-black xl:flex-row">
        <div className="min-w-[343px] h-[328px] rounded-2xl bg-(--color-accent) text-white overflow-hidden relative shrink-0 xl:w-[636px]">
          <p className="text-[clamp(2.5rem,2.2928rem+0.884vw,3rem)] pt-4 ps-[16.5px] xl:pt-12 xl:ps-12">
            35 лет
          </p>
          <p className="ps-4 xl:ps-12">в туризме</p>
          <img
            src="/src/assets/advantages/inTourism.png"
            alt="туристический чемодан"
            width={272}
            height={295}
            className="absolute right-[77px] bottom-0 w-[182px] h-[198px] xl:w-[272px] xl:h-[295px]"
          />
        </div>

        <div className="flex flex-col gap-4 *:overflow-hidden xl:*:h-[152px] xl:gap-6 xl:flex-row xl:flex-wrap ">
          <div className="min-w-[343px] h-[120px] rounded-2xl bg-(--color-gray-1) relative xl:min-w-0 xl:w-[301px] xl:h-[152px]">
            <div className="ps-4 pt-8">
              <h2>2 000 000</h2>
              <p className="text-[clamp(1rem,0.8964rem+0.442vw,1.25rem)]">
                клиентов
              </p>
            </div>
            <img
              src="/src/assets/advantages/clients.png"
              alt="Счастливые клиенты"
              width={155}
              height={170}
              className="absolute top-[11px] right-[9px] xl:top-3 xl:right-[-9.75px]"
            />
          </div>

          <div className="min-w-[343px] h-[120px] rounded-2xl bg-(--color-gray-1) relative xl:min-w-0 xl:w-[301px] xl:h-[152px] ">
            <div className="ps-4 pt-8 xl: xl:ps-8 xl:pt-[38px]">
              <h2>3 000</h2>
              <p className="text-[clamp(1rem,0.8964rem+0.442vw,1.25rem)]">
                турагентств
              </p>
            </div>
            <img
              src="/src/assets/advantages/travelAgencies.png"
              alt=""
              width={201}
              height={143}
              className="absolute top-0.5 right-[-7px] w-[178px] h-[126px] xl:w-[201px] xl:h-[143px] xl:top-2.5 xl:right-[-35px]"
            />
          </div>

          <div className="min-w-[343px] h-[120px] rounded-2xl bg-(--color-gray-1) relative xl:min-w-0 xl:w-[627px] xl:h-[152px]">
            <div className="ps-4 pt-8 xl:ps-8 xl:pt-[38px]">
              <h2>30 +</h2>
              <p className="text-[clamp(1rem,0.8964rem+0.442vw,1.25rem)]">
                стран и направлений
              </p>
            </div>
            <img
              src="/src/assets/advantages/directions.png"
              alt=""
              width={133}
              height={89}
              className="absolute top-8 right-[29px] w-[88px] h-[59px] xl:w-[133px] xl:h-[89px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
