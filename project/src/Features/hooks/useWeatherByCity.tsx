import { useQuery } from "@tanstack/react-query";
import { getWeatherByCityName } from "../../services/endpoint";
import type { CurrentWeather } from "../Weather/types";


export default function useWeatherByCity(city: string) {
  return useQuery<CurrentWeather>({
    queryKey: ["weather", city],
    queryFn: () => getWeatherByCityName(city),
  });
}
