function Button(props) {
  return (
    <button
      type="submit"
      className={
        "px-4 py-2 font-medium tracking-wide w-fit rounded cursor-pointer " +
        props.textColor +
        " " +
        props.bgColor
        + " hover:"+
        props.textHover
      }
    >
      {props.name}
    </button>
  );
}

export default Button;
