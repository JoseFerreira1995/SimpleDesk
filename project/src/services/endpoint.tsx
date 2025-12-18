const API_KEY = "57f92327e627e53f4d784b6513b38b05";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "https://api.openweathermap.org/geo/1.0";

export const getWeatherByGeoLocation = async (lat: number, lon: number) => {
  try {
    const response = await fetch(
      `${GEO_URL}/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    if (!response.ok) {
      console.log("Error trying to access");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeatherByCityName = async (city: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`
    );

    if (!response.ok) {
      console.log("Error trying to access");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
