import telegram from "@icons/social media/tg.svg";
import vkontakte from "@icons/social media/vk.svg";
import whatsapp from "@icons/social media/wa.svg";

const Feedback = () => {
  return (
    <div>
      <div className="flex gap-4 max-[1100px]:flex-col max-[1100px]:gap-6 ">
        <a
          href="tel:84957855535"
          className="text-(--color-accent) text-[14px] font-normal h-[21px] max-[1100px]:text-[18px]"
        >
          8 (495) 785-55-35
        </a>
        <div className="flex flex-col">
          <a href="tel:88002005535" className="text-(--color-accent) text-[14px] font-normal max-[1100px]:text-[18px]">
            8 (800) 200-55-35
          </a>
          <p className="text-[10px] font-normal text-(--color-gray-5) max-[1100px]:text-[12px]">бесплатно из регионов</p>
        </div>
        <div className={`flex items-center gap-2`}>
          <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-all rounded-2xl bg-(--color-gray-1)">
            <img src={telegram} alt="telegram"/>
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-all rounded-2xl bg-(--color-gray-1)">
            <img src={vkontakte} alt="vkontakte"/>
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-all rounded-2xl bg-(--color-gray-1)">
            <img src={whatsapp} alt="whatsapp"/>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Feedback;
