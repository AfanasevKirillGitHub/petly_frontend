import { useValidation } from './useValidation';
import { useState } from 'react';

interface ISetings {
  [key: string]: boolean | number | string;
}

export const useInput = (initialValue: string, validations: ISetings) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true)
  }
  // useEffect(() => {
  //   if (value === '') {
  //     setIsDirty(false);
  //   } else setIsDirty(true);
  // }, [value]);

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
