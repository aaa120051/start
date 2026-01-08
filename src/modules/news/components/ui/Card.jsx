const Card = ({ name, additionally, date,}) => {
  return (
    <a href="#">
      <div className="leading-none w-[302px] h-[166px] shrink-0">
        <h3 className="text-black leading-6">{name}</h3>
        <p className="pt-2 text-[14px] font-normal leading-5">{additionally}</p>
        <p className="pt-2 text-[12px] font-normal">{date}</p>
      </div>
    </a>
  );
};

export default Card;
