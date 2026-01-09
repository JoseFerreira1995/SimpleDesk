import { useQuery } from "@tanstack/react-query";
import { getWeatherForecast } from "../../services/endpoint";
import type { ForecastResponse } from "../Weather/types";

export default function useWeatherForecast(city: string) {
  return useQuery<ForecastResponse>({
    queryKey: ["forecast", city],
    queryFn: () => getWeatherForecast(city),
  });
}
