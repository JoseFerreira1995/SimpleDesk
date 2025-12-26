import { HomeIcon, Key } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import useWeatherByCity from "../hooks/useWeatherByCity";
import useWeatherForecast from "../hooks/useWeatherForecast";
import ForecastBar from "./Components/ForecastBar";
import MainWeatherCard from "./Components/MainWeatherCard";
import SearchCity from "./Components/SearchCity";
import { useSearchByName } from "../hooks/useSearchByName";
import { useDefounce } from "../hooks/useDebounce";
import ErrorPage from "./Components/ErrorPage";
import LoadingSkeleton from "./Components/LoadingSkeleton";

export default function WeatherMainPage() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [city, setCity] = useState<string>("Porto");
  const debounceSearch = useDefounce(input, 200);

  const { data: currentWeather, isError, isLoading } = useWeatherByCity(city);

  const {
    data: forecast,
    isError: foreCastError,
    isLoading: foreCastLoading,
  } = useWeatherForecast(city);

  const {
    data: searchCity,
    isError: errorSearch,
    isLoading: leadingSearch,
  } = useSearchByName(debounceSearch);

  if (isError || foreCastError || errorSearch) {
    return <ErrorPage />;
  }

  if (isLoading && foreCastLoading && leadingSearch) {
    return <LoadingSkeleton></LoadingSkeleton>;
  }

  if (!currentWeather) {
    return <LoadingSkeleton></LoadingSkeleton>;
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
        <div className=" relative flex justify-center m-[5%] gap-5 ">
          <SearchCity
            input={input}
            onInputChange={setInput}
            onSearch={() => setCity(input)}
            onEnter={() => setInput("")}
          />

          {searchCity && searchCity.length > 0 && (
            <ul className="absolute top-full mt-1 w-full bg-white rounded-md shadow-lg border z-10">
              {searchCity.map((city: any) => (
                <li
                  key={`${city.lat}-${city.lon}`}
                  onClick={() => {
                    setCity(city.name);
                    setInput("");
                  }}
                  className="px-4 py-2 hover:bg-sky-100 cursor-pointer text-sm"
                >
                  {city.name} {city.country}
                </li>
              ))}
            </ul>
          )}
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
