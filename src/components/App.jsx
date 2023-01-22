import { useState, useEffect, createContext, useRef } from 'react';
import { useBattery } from 'react-use';

import { useToggle } from 'hooks';
import { Menu } from './Menu';
import { RegisterUser } from './RegisterUser';
import { Player } from './Player';

function App() {
  const [count, setCount] = useState(0);
  const [student, setStudent] = useState({ name: 'John', age: 25 });

  // console.log('useBattery', useBattery());

  const incrementCount = () => {
    setCount(count + 1);
  };

  const updateStudentData = () => {
    setStudent({
      ...student,
      name: 'Sara',
    });
  };

  useEffect(() => {
    console.log('Hello from useEffect!');
    document.title = `Count: ${count}`;
  }, [count]);

  const [prawda, zmienPrawda] = useToggle(true);

  const MyContext = createContext();

  const myBtnRef = useRef();
  const myInputRef = useRef('Hello World!');

  useEffect(() => {
    myBtnRef.current.addEventListener('click', () => {
      console.log('My Btn Works!');
      myInputRef.current.value = 'My Btn Works!';
    });
  });

  return (
    <div>
      <h1>
        HOOKS - count: {count} IS IT TRUE? {prawda ? 'YES' : 'NO'}
      </h1>
      <h2>
        Student: {student.name}, age: {student.age}
      </h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={updateStudentData}>Update Student</button>
      <button onClick={zmienPrawda}>Toggle</button>
      <Menu />
      <RegisterUser />
      <button ref={myBtnRef}>My button</button>
      <input
        ref={myInputRef}
        value={myInputRef.current}
        readOnly={true}
      ></input>
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
    </div>
  );
}

export default App;
