import { useQuery } from "@tanstack/react-query";
import { getCityName } from "../../services/endpoint";



export const useSearchByName = (cityName: string) => {
  return useQuery({
    queryKey: ["SearchCity", cityName],
    queryFn: () => getCityName(cityName),
    enabled: cityName.length >= 2,
    staleTime: 1000 * 60 * 10,
  });
};
