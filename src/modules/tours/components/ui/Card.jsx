const Card = ({ img, city, name, duration, price }) => {
  return (
    <a href="#">
      <div className="leading-none w-[302px] h-[366px] shrink-0">
        <img
          src={img}
          alt={name}
          width={302}
          height={201}
          className="rounded-2xl"
        />
        <h6 className="pt-3 text-(--color-accent) font-normal pb-0.5">
          {city}
        </h6>
        <h3 className="text-black leading-7">{name}</h3>
        <p className="pt-1.5 text-[12px] font-normal">{duration}</p>
        <div className="w-14 h-1 bg-(--color-accent) my-4"></div>
        <div>
          <span className="text-black text-[clamp(1.375rem,1.3232rem+0.221vw,1.5rem)]">
            {price}
          </span>
          <span className="text-[14px]"> / за номер</span>
        </div>
      </div>
    </a>
  );
};

export default Card;
