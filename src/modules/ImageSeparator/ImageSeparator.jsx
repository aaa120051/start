import ImgSeparatorMobile from "@images/ImgSeparator/ImgSeparatorMobile.png";
import ImgSeparatorDesktop from "@images/ImgSeparator/ImgSeparatorDesktop.png";

const ImageSeparator = () => {
  return (
    <div className="px-4 pt-11 lg:pt-20 xl:px-0 ">
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet={ImgSeparatorMobile}
          alt="ImgSeparator"
          height={176}
          width={608}
          className="w-full h-44 rounded-2xl"
        />
        <img
          src={ImgSeparatorDesktop}
          alt="ImgSeparator"
          height={176}
          width={1280}
          className="w-full h-44 rounded-2xl"
        />
      </picture>
    </div>
  );
};

export default ImageSeparator;
