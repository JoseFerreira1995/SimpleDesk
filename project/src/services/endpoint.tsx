const API_KEY = "57f92327e627e53f4d784b6513b38b05";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
//const GEO_URL = "https://api.openweathermap.org/geo/1.0";

export const getWeatherForecast = async (city: string) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Error Loading forecast");
  }

  const data = await response.json();

  return data;
};

export const getWeatherByCityName = async (city: string) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    console.log("Error trying to access");
  }
  const data = await response.json();
  return data;
};
