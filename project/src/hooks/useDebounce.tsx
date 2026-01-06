import { useEffect, useState } from "react";

export const useDefounce = <T,>(value: T, time = 400) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => clearTimeout(timeout);
  }, [value, time]);

  return debounceValue;
};
