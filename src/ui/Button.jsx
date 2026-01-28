const Button = ({ children, AddClass }) => {
  return (
    <a href="#">
      <button
        type="button"
        className={`text-white w-[calc(100%-16px)] bg-(--color-accent) py-3 rounded-lg cursor-pointer ${AddClass}`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
