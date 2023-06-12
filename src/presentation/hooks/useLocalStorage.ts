import { useState } from 'react';

interface useLocalStorageProps {
  storedValue: unknown;
  setValue: (value: unknown) => void;
}

export default function useLocalStorage(
  key: string,
  initialValue: unknown
): useLocalStorageProps {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item =
        typeof window !== 'undefined' && window.localStorage.getItem(key);

      return item || initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: unknown): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, valueToStore);
    } catch (error) {
      throw new Error();
    }
  };

  return { storedValue, setValue };
}
