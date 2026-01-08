const Button = ({ isActive, onClick, children }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`${
          isActive
            ? "bg-(--color-accent) text-white"
            : "bg-(--color-gray-1) text-black"
        } p-3 text-[14px] font-normal rounded-lg transition-colors duration-200`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
