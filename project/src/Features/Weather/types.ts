export type SearchCityProps = {
    input: string;
    onSearch: () => void;
    onInputChange: (value: string) => void;
    openDropdown: () => void;
  };

  export type ForecastItem = {
    dt: number;
    dt_txt: string;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  };

  export type ForecastResponse = {
    list: ForecastItem[];
  }
  
  export type ForecasTime = {
    dt_txt: string | string[];
    
  };


  export type CurrentWeather = {
    name: string;
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
  }