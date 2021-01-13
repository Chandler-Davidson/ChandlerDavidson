import {useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState(5);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <span>
      <button onClick={decrement}>-</button>
      <span style={{margin: 'auto 4px'}}>{count}</span>
      <button onClick={increment}>+</button>
    </span>
  );
}
