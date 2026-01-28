import ButtonsLine from "./components/ButtonsLine";
import InputsLine from "./components/InputsLine";

const search = () => {
  return (
    <section>
      <form action="/server-path" className="pt-4 lg:pt-8">
      <ButtonsLine />
      <InputsLine />
      </form>
    </section>
  );
};

export default search;
