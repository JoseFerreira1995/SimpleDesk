import { Calendar1Icon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { WEATHER_ICON_URL } from "../../../config/env";

export default function ForecastBar({ forecast }: { forecast: any }) {
  const iconSize: string = "@2x.png";
  return (
    <>
      <Card className="bg-white/80 dark:bg-sky-700/80 w-full sm:w-1/3 md:w-1/4 rounded-xl shadow-sm">
        <CardHeader className="flex items-center gap-3 border-b border-sky-100 pb-3">
          <Calendar1Icon className="text-sky-500"></Calendar1Icon>
          <CardTitle className="text-sky-500 text-lg">5 Day Forecast</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className=" gap-3 overflow-x-auto grid ">
            {forecast &&
              forecast.list
                .filter((item) => item.dt_txt.includes("12:00:00"))
                .map((element) => {
                  const date = new Date(element.dt * 1000);
                  const tempColor =
                    element.main.temp > 25
                      ? "text-red-500"
                      : element.main.temp < 10
                      ? "text-blue-500"
                      : "text-sky-900";

                  return (
                    <div
                      key={element.dt_txt}
                      className="flex flex-row items-center justify-between rounded-lg bg-white/80 p-4 shadow-md hover:scale-95 hover:bg-sky-100 transition-all min-2-[90px]"
                    >
                      <span className=" flex gap-4 text-sm text-sky-700 font-medium">
                        {date.getDate()}/{date.getMonth() + 1}
                        {element.weather.map((item) => (
                          <img
                            className="size-10"
                            src={`${WEATHER_ICON_URL}${item.icon}${iconSize}`}
                          ></img>
                        ))}
                      </span>

                      <span className={`text-lg font-semibold ${tempColor}`}>
                        {Math.round(element.main.temp_max)}°{" "}
                        {Math.round(element.main.temp_min)}°
                      </span>
                    </div>
                  );
                })}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
