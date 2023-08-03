function Input(props) {
  return (
    <form className="flex flex-col items-center" onSubmit={props.changeCity}>
      <label htmlFor="cityInput" className="text-2xl uppercase tracking-wider font-thin py-4">
        Recherche une ville
      </label>
      <div className="flex space-x-4 w-96">
        <input
          type="text"
          placeholder="Entrez le nom d'une ville"
          className="rounded w-full px-2 text-slate-800"
          onChange={props.onChangeInput}
          id="cityInput"
        />
        <button
          type="submit"
          className={
            "px-4 py-2 font-medium tracking-wide w-fit rounded cursor-pointer text-slate-200 bg-slate-500 hover:text-slate-100"
          }
          onClick={props.changeCity}
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}

export default Input;
