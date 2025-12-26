import { Calendar1Icon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function ForecastBar({ forecast }: { forecast: any }) {
  return (
    <>
      <Card className="bg-sky-50 w-[18%] rounded-xl shadow-sm">
        <CardHeader className="flex items-center gap-3 border-b border-sky-100 pb-3">
          <Calendar1Icon className="text-sky-500"></Calendar1Icon>
          <CardTitle className="text-sky-500 text-lg">5 Day Forecast</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex flex-col gap-3">
            {forecast &&
              forecast.list
                .filter((item) => item.dt_txt.includes("12:00:00"))
                .map((element) => {
                  const date = new Date(element.dt * 1000).getDate();
                  const tempColor =
                    element.main.temp > 25
                      ? "text-red-500"
                      : element.main.temp < 10
                      ? "text-blue-500"
                      : "text-sky-900";

                  return (
                    <div
                      key={element.dt_txt}
                      className="flex items-center justify-between rounded-lg bg-white px-5 py-3 shadow-sm hover:bg-sky-100 transition"
                    >
                      <span className="text-sm text-sky-700 font-medium">
                        {date}
                      </span>

                      <span className={`text-lg font-semibold ${tempColor}`}>
                        {Math.round(element.main.temp)}°
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
