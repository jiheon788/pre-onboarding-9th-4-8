import { useState } from 'react';

const useInput = (
  initialValue: string,
): [
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, onChange, setValue];
};

export default useInput;
