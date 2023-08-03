import { useState, useEffect } from "react";
import "./App.css";
import Input from "./Components/Input";
import axios from "axios";
import Title from "./Components/Title";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "./store/Slices/citySlice";
import Footer from "./Footer/Footer";

function App() {
  const [meteoData, setMeteoData] = useState();
  const [newCity, setNewCity] = useState("");

  /** STORE */
  const cityStore = useSelector((store) => store.CITY.city);
  const dispatch = useDispatch();

  /** FETCH DATAS */
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://api.weatherapi.com/v1/current.json?key=" +
            process.env.REACT_APP_API_KEY +
            "&q=" +
            cityStore +
            "&lang=fr"
        )
        .then((response) => {
          setMeteoData(response.data);
        })
        .catch((err) => {
          console.log(err.data);
        });
    };

    setTimeout(() => {
      fetchData();
    }, 500);
  }, [cityStore]);

  const changeCity = () => {
    dispatch(setCity(newCity));
  };

  return (
    <div className="bg-slate-900 h-screen flex flex-col justify-center items-center text-white">
      <Title title="Ma météo" />
      <Input
        onChangeInput={(e) => setNewCity(e.target.value)}
        changeCity={changeCity}
      />
      {meteoData ? (
        <div className="h-fit w-60 flex flex-col justify-evenly items-center rounded py-8">
          <img
            src={meteoData.current.condition.icon}
            alt={meteoData.current.condition.text + " icon"}
            className="h-20 "
          />
          <div className="text-center">
            <h2 className="text-6xl">{meteoData.current.temp_c}°C</h2>
            <p>{meteoData.current.condition.text}</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl">{meteoData.location.name}</h3>
            <h4 className="text-xl">{meteoData.location.country}</h4>
          </div>
        </div>
      ) : (
        <div className="animate-pulse text-5xl text-slate-300">Loading...</div>
      )}
      <Footer />
    </div>
  );
}

export default App;
