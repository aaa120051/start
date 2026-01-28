const Button = ({ isActive, onClick, children }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`${
          isActive
            ? "bg-(--color-accent) text-white border-b border-(--color-accent)"
            : "bg-(--color-gray-1) text-(--color-accent) border-t border-s border-e border-(--color-gray-2)"
        } p-3 font-bold rounded-t-lg transition-colors duration-200 cursor-pointer sm:px-4 sm:py-2 `}
      >
        <h5>{children}</h5>
      </button>
    </div>
  );
};

export default Button;
