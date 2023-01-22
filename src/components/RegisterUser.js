import { useState } from 'react';
import { useUser } from 'context';

export const RegisterUser = () => {
  const { logIn } = useUser();
  const [value, setValue] = useState('');

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)}></input>
      <button onClick={() => logIn(value)}>Register</button>
    </div>
  );
};
