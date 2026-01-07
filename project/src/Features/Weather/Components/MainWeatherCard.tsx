import { LocateFixedIcon, SunriseIcon, SunsetIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export default function MainWeatherCard({
  currentWeather,
}: {
  currentWeather: any;
}) {
  const sunriseTime = new Date(currentWeather.sys.sunrise * 1000);
  const sunSetTime = new Date(currentWeather.sys.sunset * 1000);

  return (
    <Card className="bg-sky-50/80 dark:bg-sky-800/70 w-full sm:w-2/3 md:w-1/2 rounded-2xl  ">
      <CardHeader className="flex flex-row items-center gap-3 border-b pb-4">
        <LocateFixedIcon className="text-sky-500" />
        <div>
          <CardTitle className="text-xl font-semibold text-sky-500  dark:text-cyan-400">
            {currentWeather.name}
          </CardTitle>
          <CardDescription className="text-sm dark:text-gray-100">
            {currentWeather.sys.country}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="mt-6 space-y-6">
        <div className="text-center">
          <CardTitle className="text-7xl font-bold text-sky-500   dark:text-cyan-400">
            {Math.round(currentWeather.main.temp)}°
          </CardTitle>
          <CardDescription className="capitalize text-base dark:text-gray-100">
            {currentWeather.weather[0].description}
          </CardDescription>

          <div className="flex justify-center gap-6 mt-3 text-sm text-muted-foreground dark:text-gray-100">
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
              className="bg-sky-200/60 rounded-xl p-4 flex flex-col gap-1 hover:scale-95 transition"
            >
              <span className="text-xs font-bold text-muted-foreground dark:text-gray-300">
                {item.label}
              </span>
              <span className="text-lg font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-4 pt-6 border-t">
        <div className="flex items-center gap-3 bg-orange-200 w-1/2 p-4 rounded-xl hover:scale-95 transition">
          <SunriseIcon className="bg-orange-500 text-white rounded-md p-1" />
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Sunrise</span>
            <span className="font-semibold">
              {sunriseTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-fuchsia-200 w-1/2 p-4 rounded-xl hover:scale-95 transition">
          <SunsetIcon className="bg-fuchsia-500 text-white rounded-md p-1" />
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Sunset</span>
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
  );
}
