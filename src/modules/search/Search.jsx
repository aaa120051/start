import ButtonsLine from "./components/ButtonsLine";
import InputsLine from "./components/InputsLine";

const search = () => {
  return (
    <div >
      <form action="/server-path" className="pt-4 lg:pt-8">
      <ButtonsLine />
      <InputsLine />
      </form>
    </div>
  );
};

export default search;
