const Card = ({ img, city, name, additionally, price, forPrice }) => {
  return (
    <a href="#">
      <div
        className="leading-none w-[302px] h-[387px] shrink-0 ps-4 pt-52"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex text-white gap-1 h-[23px]">
          <h6 className="px-2 bg-(--color-accent) pt-[5px] rounded-sm">
            Хит продаж
          </h6>
          <h6 className="text-(--color-accent) font-normal px-2 bg-white pt-[5px] rounded-sm">
            {city}
          </h6>
        </div>

        <h3 className="text-white leading-7 font-normal pt-1">{name}</h3>

        <div className="pt-1.5 text-[12px] font-normal text-(--color-gray-2)">
          {additionally}
        </div>

        <div className="w-14 h-1 bg-(--color-accent) my-4"></div>

        <div>
          <span className="text-[clamp(1.375rem,1.3232rem+0.221vw,1.5rem)] text-white font-normal">
            {price}
          </span>
          <span className="text-[14px] text-(--color-gray-2)">{forPrice}</span>
        </div>
      </div>
    </a>
  );
};

export default Card;
