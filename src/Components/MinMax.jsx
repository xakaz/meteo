export default function MinMax(props) {
  return (
    <>
      {/** MIN/MAX */}
      <div className={`flex space-x-4 justify-center items-center h-28 w-full`}>
        <div className="text-center text-blue-400 ">
          <p className="text-sm">MIN</p>
          <p className={`font-bold ${props.mintemp_text_size}`}>{props.mintemp_c}°C</p>
        </div>
        <div className="text-5xl">🌡</div>
        <div className="text-center text-orange-400 ">
          <p className="text-sm">MAX</p>
          <p className={`font-bold ${props.maxtemp_text_size}`}>{props.maxtemp_c}°C</p>
        </div>
      </div>
    </>
  );
}
