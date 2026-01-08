const Button = ({ children, AddClass }) => {
  return (
    <a href="#">
      <button
        type="button"
        className={`text-white w-full bg-(--color-accent) py-3 rounded-lg ${AddClass}`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
