import { useState } from "react";

const Input = ({ label, baseText, addClass = "" }) => {
  const [value, setValue] = useState(baseText || "");
  const isEmpty = value.trim() === "";

  return (
    <div
      className={`relative bg-white h-12 w-full ps-4 py-[5px] leading-none rounded-lg md:rounded-none ${addClass}`}
    >
      {!isEmpty && (
        <label
          htmlFor={label}
          className="absolute top-[7px] text-[12px] text-(--color-gray-5) transition-all"
        >
          {label}
        </label>
      )}

      <input
        id={label}
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={isEmpty ? label : ""}
        className={`w-full h-full outline-none bg-transparent transition-all cursor-pointer ${
          isEmpty
            ? "text-[16px] font-normal text-black"
            : "text-[16px] font-semibold pt-4 text-black"
        }`}
      />
    </div>
  );
};

export default Input;
