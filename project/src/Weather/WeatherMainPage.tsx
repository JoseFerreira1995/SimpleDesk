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
import Header from "../components/Header";

export default function WeatherMainPage() {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [city, setCity] = useState<string>("Porto");
  const debounceSearch = useDefounce(input, 200);

  const { data: currentWeather, isError, isLoading } = useWeatherByCity(city);

  const {
    data: forecast,
    isError: foreCastError,
    isLoading: foreCastLoading,
  } = useWeatherForecast(city);

  console.log(forecast);

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
      <Header title="Weather" textColor="#38bdf8"></Header>

      <section>
        <div className=" relative flex justify-center m-8 gap-5 ">
          <SearchCity
            input={input}
            onInputChange={setInput}
            onSearch={() => setCity(input)}
            openDropdown={() => setIsOpen(true)}
          />

          {searchCity && searchCity.length > 0 && isOpen && (
            <ul className="absolute top-full mt-1 w-full sm:w-64 md:w-80 bg-sky-100 dark:bg-sky-400 opacity-90 hover:opacity-100 transition-normal dark:text-black rounded-lg shadow-lg border z-10">
              {searchCity.map((city: any) => (
                <li
                  key={`${city.lat}-${city.lon}`}
                  onClick={() => {
                    setCity(city.name);
                    setInput(city.name);
                    setIsOpen(false);
                  }}
                  className="px-4 py-3 hover:bg-sky-200 dark:hover:bg-sky-500 hover:rounded-lg cursor-pointer text-sm sm:text-base"
                >
                  {city.name} {city.country}
                </li>
              ))}
            </ul>
          )}
        </div>

        {currentWeather && (
          <>
            <div className="w-full flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 m-[5%]">
              <MainWeatherCard currentWeather={currentWeather} />
              <ForecastBar forecast={forecast} />
            </div>
          </>
        )}
      </section>
    </>
  );
}
