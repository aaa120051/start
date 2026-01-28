import rst from "@images/partners/rst.png";
import sletat from "@images/partners/sletat.png";
import assistour from "@images/partners/assistour.png";
import onlineexp from "@images/partners/onlineexp.png";
import ator from "@images/partners/ator.png";
import paykeeper from "@images/partners/paykeeper.png";
import tkp from "@images/partners/tkp.png";
import alphabank from "@images/partners/alphabank.png";
import iata from "@images/partners/iata.png";
import BSIGlobal from "@images/partners/BSIGlobal.png";


const Partners = () => {
  return (
    <section className="ps-4 pt-11 lg:pt-20 xl:ps-0 text-black">
      <h2 className="pb-6 lg:pb-[42px]">Партнеры</h2>
      <div className="flex h-[70px] gap-12 items-center overflow-x-auto scrollbar-hide">
        <img
          src= {rst}
          alt="rst"
          width={85}
          height={70}
          className="w-16 h-[52px] lg:w-[85px] lg:h-[70px]"
        />
        <img
          src= {sletat}
          alt="sletat"
          width={191}
          height={62}
          className="w-36 h-[46px] lg:w-[191px] lg:h-[62px]"
        />
        <img
          src= {assistour}
          alt="assistour"
          width={180}
          height={62}
          className="w-[136px] h-[46px] lg:w-[180px] lg:h-[62px]"
        />
        <img
          src= {onlineexp}
          alt="onlineexp"
          width={148}
          height={62}
          className="w-28 h-[46px] lg:w-[148px] lg:h-[62px]"
        />
        <img
          src= {ator}
          alt="ator"
          width={72}
          height={63}
          className="w-[55px] h-12 lg:w-[72px] lg:h-[63px]"
        />
        <img
          src= {paykeeper}
          alt="paykeeper"
          width={159}
          height={62}
          className="w-[120px] h-[46px] lg:w-[159px] lg:h-[62px]"
        />
        <img
          src= {tkp}
          alt="tkp"
          width={183}
          height={52}
          className="w-[139px] h-10 lg:w-[183px] lg:h-[52px]"
        />
        <img
          src= {alphabank}
          alt="alphabank"
          width={150}
          height={62}
          className="w-[113px] h-[46px] lg:w-[150px] lg:h-[62px]"
        />
        <img
          src= {iata}
          alt="iata"
          width={163}
          height={62}
          className="w-[123px] h-[46px] lg:w-[163px] lg:h-[62px]"
        />
        <img
          src= {BSIGlobal}
          alt="BSIGlobal"
          width={167}
          height={45}
          className="w-[126px] h-[34px] lg:w-[167px] lg:h-[45px]"
        />
      </div>
    </section>
  );
};

export default Partners;
