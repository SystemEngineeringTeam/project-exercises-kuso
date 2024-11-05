import { useState, useEffect } from 'react';

type CrazyScore = 0 | 1 | 2 | 3;

export const useCrazyScore = () => {
  const [value, setValue] = useState<CrazyScore>();

  const updateValue = (newValue: CrazyScore) => {
    if (newValue === value) {
      setValue(undefined);
    } else {
      setValue(newValue);
    }
  };

  useEffect(() => {
    console.log('value:', value); // eslint-disable-line no-console
  }, [value]);

  return { value, updateValue };
};
