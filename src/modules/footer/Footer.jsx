import React from "react";

import tg from "@icons/social media/tg.svg";
import vk from "@icons/social media/vk.svg";
import wa from "@icons/social media/wa.svg";
import mir from "@icons/footer/mir.svg";
import visa from "@icons/footer/visa.svg";
import masterCard from "@icons/footer/master card.svg";
import onlineexp from "@images/partners/onlineexp.png";
import assistour from "@images/partners/assistour.png";
import paykeeper from "@images/partners/paykeeper.png";
import sletat from "@images/partners/sletat.png";

const Footer = () => {
  return (
    <footer className="pt-11 pl-4 pb-[52px] lg:pt-20 xl:ps-0 lg:pb-11">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="max-w-[519px] flex flex-col gap-5 order-3 lg:order-1">
          <div>
            <p className="text-lg font-normal">Круглосуточная поддержка</p>
            <h4 className="text-(--color-accent)">8 (800) 200-55-35</h4>
          </div>
          <div>
            <p className="text-lg font-normal">Email</p>
            <h4 className="text-(--color-accent)">msk@bsigroup.ru</h4>
          </div>
          <div>
            <p className="text-lg font-normal">Офис в Москве</p>
            <h4 className="text-black">
              121069 г. Москва, ул. Садовая-Кудринская д. 2/62/35, строение 1,
              этаж 3 (м. Баррикадная)
            </h4>
          </div>
          <div>
            <p className="text-lg font-normal pb-2">Мы в соцсетях</p>
            <div className={`flex items-center gap-2`}>
              <a href="#" className="w-[42px] h-[42px] flex items-center justify-center hover:bg-gray-200 transition-all rounded-3xl bg-(--color-gray-1)">
                <img src={tg} alt="telegram" width={22} height={19}/>
              </a>
              <a href="#" className="w-[42px] h-[42px] flex items-center justify-center hover:bg-gray-200 transition-all rounded-3xl bg-(--color-gray-1)">
                <img src={vk} alt="vkontakte" width={24} height={15}/>
              </a>
              <a href="#" className="w-[42px] h-[42px] flex items-center justify-center hover:bg-gray-200 transition-all rounded-3xl bg-(--color-gray-1)">
                <img src={wa} alt="whatsapp" width={22} height={22}/>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[302px] flex flex-row gap-6 text-[clamp(1.25rem,1.1464rem+0.442vw,1.5rem)] text-black lg:flex-col order-1 lg:order-2">
          <div className="w-40 flex flex-col gap-6">
            <a href="#">Страны</a>
            <a href="#">Турагенствам</a>
          </div>
          <div className="w-40 flex flex-col gap-6">
            <a href="#">Туристам</a>
            <a href="#">О компании</a>
          </div>
        </div>

        <div className="pt-6 w-[350px] lg:pt-0 flex gap-4 lg:flex-col flex-wrap order-2 lg:order-3">
          <div className="flex gap-1 text-[clamp(0.9375rem,0.8598rem+0.3315vw,1.125rem)] ">
            <p>USD</p>
            <p className="text-black">88,53</p>
          </div>
          <div className="flex gap-1 text-[clamp(0.9375rem,0.8598rem+0.3315vw,1.125rem)] ">
            <p>EUR</p>
            <p className="text-black">90,21</p>
          </div>
          <div className="flex gap-1 text-[clamp(0.9375rem,0.8598rem+0.3315vw,1.125rem)] ">
            <p>CNY</p>
            <p className="text-black">11,72</p>
          </div>
          <div className="flex gap-1 text-[clamp(0.9375rem,0.8598rem+0.3315vw,1.125rem)] ">
            <p>KZT</p>
            <p className="text-black">0,17</p>
          </div>
          <div className="flex gap-4 lg:pt-2">
            <img src={mir} alt="банковская карта mir " />
            <img
              src={visa}
              alt="банковская карта visa"
            />
            <img
              src={masterCard}
              alt="банковская карта master card"
            />
          </div>
        </div>
      </div>

      <div className="pt-6 pb-10 flex gap-16 overflow-x-auto scrollbar-hide border-b border-(--color-gray-5) xl:pt-10 ">
        <img
          src={onlineexp}
          alt="onlineexp"
          width={119}
          height={50}
        />
        <img
          src={assistour}
          alt="assistour"
          width={145}
          height={50}
        />
        <img
          src={paykeeper}
          alt="paykeeper"
          width={101}
          height={50}
        />
        <img
          src={sletat}
          alt="sletat"
          width={157}
          height={51}
        />
      </div>

      <div className="pt-3 xl:pt-[22px] font-normal text-lg flex flex-col items-center min-[840px]:flex-row-reverse min-[840px]:justify-between">
        <span className="underline">
          Политика в отношении обработки персональных данных
        </span>
        <span>BSI GROUP © 1990—2025 Все права защищены.</span>
      </div>
    </footer>
  );
};

export default Footer;
