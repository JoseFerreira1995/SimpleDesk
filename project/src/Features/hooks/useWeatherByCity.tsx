import { useQuery } from "@tanstack/react-query";
import { getWeatherByCityName } from "../../services/endpoint";


export default function useWeatherByCity(city: string) {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeatherByCityName(city),
  });
}
