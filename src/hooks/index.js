import { useState } from 'react';

export const useToggle = (initialValue = false) => {
  const [isTrue, setIsTrue] = useState(initialValue);

  const toggle = () => {
    setIsTrue(!isTrue);
  };

  return [isTrue, toggle];
};
