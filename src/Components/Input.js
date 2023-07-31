import React, { useState } from "react";
import Button from "./Button";

function Input() {
  /** Button props */
  const [name, setName] = useState("Rechercher");
  const [textColor, setTextColor] = useState("text-slate-200");
  const [bgColor, setBgColor] = useState("bg-slate-500");

  const searchCity = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex space-x-1 w-96 p-4"
      method="post"
      onSubmit={searchCity}
    >
      <input
        type="text"
        placeholder="Entrez le nom d'une ville"
        className="rounded w-full px-2"
      />
      <Button
        name={name.toUpperCase()}
        textColor={textColor}
        bgColor={bgColor}
      />
    </form>
  );
}

export default Input;
