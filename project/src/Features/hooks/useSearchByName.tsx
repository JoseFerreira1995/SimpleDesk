import { useQuery } from "@tanstack/react-query";
import { getCityName } from "../../services/endpoint";

type City = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
};

export const useSearchByName = (cityName: string) => {
  return useQuery<City[]>({
    queryKey: ["SearchCity", cityName],
    queryFn: () => getCityName(cityName),
    enabled: cityName.length >= 2,
    staleTime: 1000 * 60 * 10,
  });
};
