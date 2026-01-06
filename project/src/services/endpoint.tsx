import { LANGUAGE_VERSIONS } from "../CodeEditor/Constants";

const API_KEY = "57f92327e627e53f4d784b6513b38b05";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "https://api.openweathermap.org/geo/1.0";
const CODE_BASE_URL = "https://emkc.org/api/v2/piston";

type RunCodePayload = {
  language: string;
  sourceCode: string;
};

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
    throw new Error("Error trying to access");
  }
  const data = await response.json();
  return data;
};

export const getCityName = async (cityName: string) => {
  if (cityName.length < 2) return [];
  const response = await fetch(
    `${GEO_URL}/direct?q=${cityName}&limit=5&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Error trying to search country/city");
  }
  const data = await response.json();

  return data;
};

export const runCode = async ({ language, sourceCode }: RunCodePayload) => {
  const response = await fetch(`${CODE_BASE_URL}/execute`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      language: language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          content: sourceCode,
        },
      ],
    }),
  });
  if (!response.ok) {
    throw new Error("Error");
  }

  const data = await response.json();

  return data;
};
