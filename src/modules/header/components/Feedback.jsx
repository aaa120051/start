const Feedback = () => {
  return (
    <div>
      <div className="flex gap-4">
        <a
          href="tel:84957855535"
          className="text-(--color-accent) text-[14px] font-normal h-[21px]"
        >
          8 (495) 785-55-35
        </a>
        <div className="flex flex-col">
          <a href="tel:88002005535" className="text-(--color-accent) text-[14px] font-normal">
            8 (800) 200-55-35
          </a>
          <p className="text-[10px] font-normal">бесплатно из регионов</p>
        </div>
        <div className="flex gap-2 ">
          <a href="#">
            <img src="\icons\social media\tg.svg" alt="telegram" />
          </a>
          <a href="#">
            <img src="\icons\social media\vk.svg" alt="vkontakte" />
          </a>
          <a href="#">
            <img src="\icons\social media\wa.svg" alt="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
