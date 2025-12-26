import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import useWeatherByCity from "../hooks/useWeatherByCity";
import useWeatherForecast from "../hooks/useWeatherForecast";
import ForecastBar from "./Components/ForecastBar";
import MainWeatherCard from "./Components/MainWeatherCard";
import SearchCity from "./Components/SearchCity";

export default function WeatherMainPage() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [city, setCity] = useState<string>("Porto");

  const { data: currentWeather, isError, isLoading } = useWeatherByCity(city);
  console.log(currentWeather);
  const {
    data: forecast,
    isError: foreCastError,
    isLoading: foreCastLoading,
  } = useWeatherForecast(city);

  if (isLoading && foreCastLoading) {
    return <p>Loading</p>;
  }

  if (isError || foreCastError) {
    return console.log("ERROR");
  }

  if (!currentWeather) {
    return null;
  }

  return (
    <>
      <header>
        <HomeIcon className="m-[2%]" onClick={() => navigate("/")}></HomeIcon>
        <div className="flex justify-center mt-[5%]">
          <h1 className="text-blue-600 dark:text-sky-400 text-7xl font-landing font-bold text-center">
            Weather
          </h1>
        </div>
      </header>

      <section>
        <div className="flex justify-center m-[5%] gap-5 ">
          <SearchCity
            input={input}
            onInputChange={setInput}
            onSearch={() => setCity(input)}
          />
        </div>

        {currentWeather && (
          <>
            <div className="flex justify-center gap-10 m-[5%]">
              <MainWeatherCard currentWeather={currentWeather} />
              <ForecastBar forecast={forecast} />
            </div>
          </>
        )}
      </section>
    </>
  );
}
