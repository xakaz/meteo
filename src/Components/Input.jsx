import Button from "./Button";

function Input(props) {
  return (
    <form className="flex space-x-1 w-96 p-4">
      <input
        type="text"
        placeholder="Entrez le nom d'une ville"
        className="rounded w-full px-2 text-slate-800"
        onChange={props.onChangeInput}
      />
      <button
        type="button"
        className={
          "px-4 py-2 font-medium tracking-wide w-fit rounded cursor-pointer text-slate-200 bg-slate-500 hover:text-slate-100"
        }
        onClick={props.changeCity}
      >
        Rechercher
      </button>
    </form>
  );
}

export default Input;
