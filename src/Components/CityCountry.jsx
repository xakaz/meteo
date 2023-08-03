export default function CityCountry(props) {
  return (
    <div className="flex flex-col justify-center items-center mt-4 h-36  w-full">
      <h3 className="text-4xl font-semibold tracking-wider">
        {props.name.toUpperCase()}
      </h3>
      <div className="flex items-center">
        <h4 className="text-lg">{props.country.toUpperCase()}</h4>
      </div>
    </div>
  );
}
