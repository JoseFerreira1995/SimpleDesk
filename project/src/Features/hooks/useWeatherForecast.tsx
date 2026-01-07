import { useQuery } from "@tanstack/react-query";
import { getWeatherForecast } from "../../services/endpoint";


export default function useWeatherForecast(city: string) {
  return useQuery({
    queryKey: ["forecast", city],
    queryFn: () => getWeatherForecast(city),
  });
}
