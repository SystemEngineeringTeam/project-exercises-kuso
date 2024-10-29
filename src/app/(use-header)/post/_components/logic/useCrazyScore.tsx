import { useState, useEffect } from 'react';

export const useCrazyScore = () => {
  const [value, setValue] = useState<number | undefined>(undefined);

  const updateValue = (newValue: number) => {
    if (newValue === value) {
      setValue(undefined);
    }
    setValue(newValue);
  };

  useEffect(() => {
    console.log('value:', value); // eslint-disable-line no-console
  }, [value]);

  return { value, updateValue };
};
