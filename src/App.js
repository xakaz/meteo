import { useState, useEffect } from "react";
import "./App.css";
import Input from "./Components/Input";
import axios from "axios";
import Title from "./Components/Title";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "./store/Slices/citySlice";
import Footer from "./Footer/Footer";
import Card from "./Containers/Card";
import CityCountry from "./Components/CityCountry";

function App() {
  const [meteoData, setMeteoData] = useState();
  const [newCity, setNewCity] = useState();

  const day = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  /** STORE */
  const cityStore = useSelector((store) => store.CITY.city);
  const dispatch = useDispatch();

  /** FETCH DATAS */
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://api.weatherapi.com/v1/forecast.json?key=" +
            process.env.REACT_APP_API_KEY +
            "&q=" +
            cityStore +
            "&lang=fr&days=5&aqi=no&alerts=no"
        )
        .then((response) => {
          setMeteoData(response.data);
        })
        .catch((err) => {
          console.log(err.data);
        });
    };

    fetchData();
  }, [cityStore]);

  const changeCity = (e) => {
    e.preventDefault();
    dispatch(setCity(newCity));
  };

  return (
    <div className=" h-screen flex flex-col items-center text-white bg-slate-900 ">
      {/**  TITLE */}
      <Title title="WatDaWaza?" />

      <section className="w-full flex flex-col justify-center items-center">

        {/**  INPUT */}
        <Input
          onChangeInput={(e) => setNewCity(e.target.value)}
          changeCity={(e) => changeCity(e)}
        />

        {meteoData ? (
          <>
            {/** CITY & COUNTRY*/}
            <CityCountry
              name={meteoData.location.name}
              country={meteoData.location.country}
              region={meteoData.location.region}
            />

            {/**  CARDS */}
            <div className="flex space-x-8">
              {meteoData.forecast.forecastday.map((data, i) => {
                console.log(i);
                return (
                  <Card
                    key={data.date_epoch}
                    dayOfTheWeek={day[
                      new Date(data.date).getDay()
                    ].toUpperCase()}
                    localtime={data.date}
                    icon={data.day.condition.icon}
                    text={data.day.condition.text}
                    temp_c={
                      data.date === meteoData.location.localtime.slice(0, 10)
                        ? Math.round(meteoData.current.temp_c)
                        : Math.round(data.day.avgtemp_c)
                    }
                    mintemp_c={Math.round(data.day.mintemp_c)}
                    maxtemp_c={Math.round(data.day.maxtemp_c)}
                    temp_text_size={"text-4xl"}
                    mintemp_text_size={"text-xl"}
                    maxtemp_text_size={"text-xl"}
                    sunrise={data.astro.sunrise}
                    sunset={data.astro.sunset}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className="animate-pulse text-5xl text-slate-300">
            Loading...
          </div>
        )}
      </section>

      {/**  FOOTER  */}
      <Footer />
    </div>
  );
}

export default App;
