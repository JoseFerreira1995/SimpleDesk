import {
  CODE_READER_BASE_URL,
  GEO_URL,
  WEATHER_API,
  WEATHER_BASE_URL,
} from "../config/env";
import { LANGUAGE_VERSIONS, type SupportedLanguage } from "../Features/CodeEditor/Constants";

type RunCodePayload = {
  language: SupportedLanguage;
  sourceCode: string;
};

export const getWeatherForecast = async (city: string) => {
  const response = await fetch(
    `${WEATHER_BASE_URL}/forecast?q=${city}&appid=${WEATHER_API}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Error Loading forecast");
  }

  const data = await response.json();

  return data;
};

export const getWeatherByCityName = async (city: string) => {
  const response = await fetch(
    `${WEATHER_BASE_URL}/weather?q=${city}&appid=${WEATHER_API}&units=metric`
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
    `${GEO_URL}/direct?q=${cityName}&limit=5&appid=${WEATHER_API}`
  );
  if (!response.ok) {
    throw new Error("Error trying to search country/city");
  }
  const data = await response.json();

  return data;
};

export const runCode = async ({ language, sourceCode }: RunCodePayload) => {
  const response = await fetch(`${CODE_READER_BASE_URL}/execute`, {
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
