import { useState, useEffect } from 'react';

// delay - на какое количество времени отложить наши изменения
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebounsedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounsedValue(value);
    }, delay);

    // обнуляем счетчик каждый раз как изменится value
    return () => {
      clearInterval(handler);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
