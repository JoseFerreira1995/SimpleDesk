import {
  Calendar1Icon,
  HomeIcon,
  LocateFixedIcon,
  SunriseIcon,
  SunsetIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";
import { Label } from "../components/ui/label";

import { useState } from "react";

import useWeatherByCity from "../hooks/useWeatherByCity";
import useWeatherForecast from "../hooks/useWeatherForecast";

export default function WeatherMainPage() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [city, setCity] = useState<string>("Porto");

  const { data: currentWeather, isError, isLoading } = useWeatherByCity(city);
  const { data: forecast } = useWeatherForecast(city);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return console.log("ERROR");
  }
  const sunriseTime = new Date(currentWeather.sys.sunrise * 1000);
  const sunSetTime = new Date(currentWeather.sys.sunset * 1000);

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setCity(input);
              console.log(currentWeather);
              console.log(forecast);
            }}
          >
            <Input
              className="text-center bg-sky-50 w-150 input-secondary font-landing "
              placeholder="Location/City"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></Input>
          </form>
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="c">C°</ToggleGroupItem>
            <ToggleGroupItem value="c">F°</ToggleGroupItem>
            <ToggleGroupItem value="c">F°</ToggleGroupItem>
          </ToggleGroup>
        </div>

        {currentWeather && (
          <>
            <div className="flex justify-center gap-10 m-[5%]">
              <Card className="bg-sky-50 w-[45%] rounded-2xl shadow-lg">
                {/* HEADER */}
                <CardHeader className="flex flex-row items-center gap-3 border-b pb-4">
                  <LocateFixedIcon className="text-sky-500" />
                  <div>
                    <CardTitle className="text-xl font-semibold">
                      {currentWeather.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {currentWeather.sys.country}
                    </CardDescription>
                  </div>
                </CardHeader>

                {/* MAIN CONTENT */}
                <CardContent className="mt-6 space-y-6">
                  {/* Temperature */}
                  <div className="text-center">
                    <CardTitle className="text-7xl font-bold">
                      {Math.round(currentWeather.main.temp)}°
                    </CardTitle>
                    <CardDescription className="capitalize text-base">
                      {currentWeather.weather[0].description}
                    </CardDescription>

                    <div className="flex justify-center gap-6 mt-3 text-sm text-muted-foreground">
                      <span>Min: {Math.floor(currentWeather.main.temp_min)}°</span>
                      <span>Max: {Math.round(currentWeather.main.temp_max)}°</span>
                    </div>
                  </div>

                  {/* STATS GRID */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        label: "Feels Like",
                        value: `${Math.round(currentWeather.main.feels_like)}°`,
                      },
                      {
                        label: "Humidity",
                        value: `${currentWeather.main.humidity}%`,
                      },
                      {
                        label: "Pressure",
                        value: `${currentWeather.main.pressure} hPa`,
                      },
                      {
                        label: "Visibility",
                        value: `${currentWeather.visibility / 1000} km`,
                      },
                      {
                        label: "Wind",
                        value: `${Math.round(currentWeather.wind.speed * 3.6)} km/h`,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-sky-200/60 rounded-xl p-4 flex flex-col gap-1"
                      >
                        <span className="text-xs text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="text-lg font-semibold">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* FOOTER */}
                <CardFooter className="flex gap-4 pt-6 border-t">
                  <div className="flex items-center gap-3 bg-orange-200 w-1/2 p-4 rounded-xl">
                    <SunriseIcon className="bg-orange-500 text-white rounded-md p-1" />
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">
                        Sunrise
                      </span>
                      <span className="font-semibold">
                        {sunriseTime.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-fuchsia-200 w-1/2 p-4 rounded-xl">
                    <SunsetIcon className="bg-fuchsia-500 text-white rounded-md p-1" />
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">
                        Sunset
                      </span>
                      <span className="font-semibold">
                        {sunSetTime.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              {/* 5 day forecast */}
              <Card className="bg-sky-50 w-[18%]">
                <CardHeader className="flex items-center gap-3">
                  <Calendar1Icon className="text-sky-500"></Calendar1Icon>
                  <CardTitle className="text-sky-500">5 Day Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex bg-sky-300  p-4 rounded-md">
                    <Label className="text-sm">Weather Description</Label>
                    <Label>Temperature</Label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </section>
    </>
  );
}
