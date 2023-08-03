import Sunrise from "../Components/Sunrise";
import MinMax from "../Components/MinMax";

export default function Card(props) {
  return (
    <div className="h-fit w-72 flex flex-col justify-between items-center rounded-md pb-8 bg-slate-500 bg-opacity-50 hover:scale-105 hover:ring-4 hover:ring-slate-200 duration-300 ease-in-out">
      {/** DATE */}
      <div className="text-xl h-20  w-full text-center py-2 bg-slate-200 text-slate-900 rounded-t-md ">
        <p className="font-bold tracking-widest">{props.dayOfTheWeek}</p>
        <p>{new Date(props.localtime).toLocaleDateString().replaceAll('/',' / ')}</p>
      </div>

      {/** TEMP */}
      <div className="h-52 flex flex-col justify-center items-center w-full">
        {/** CURRENT OR AVERAGE */}
        <div className="h-20 py-auto">
          <div className={`text-center flex items-center h-16`}>
            <img
              src={props.icon}
              alt={props.text + " icon"}
              className={`${props.size} `}
            />
            <h2 className={`${props.temp_text_size}`}>{props.temp_c}°C</h2>
          </div>
          <p className="text-center font-thin h-4">{props.text}</p>
        </div>

        {/** MIN/MAX */}
        <MinMax
          mintemp_text_size={props.mintemp_text_size}
          mintemp_c={props.mintemp_c}
          maxtemp_c={props.maxtemp_c}
          maxtemp_text_size={props.maxtemp_text_size}
        />
      </div>

      {/** SUN */}
      <Sunrise sunrise={props.sunrise} sunset={props.sunset} />
    </div>
  );
}
