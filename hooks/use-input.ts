import { useCallback, useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [setValue],
  );

  return [value, onChange];
};

export default useInput;
