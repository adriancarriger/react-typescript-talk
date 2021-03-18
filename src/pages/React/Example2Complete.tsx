import { useState } from 'react';

const Example2 = () => {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);

  return (
    <div>
      <div>React can manage state 🎉</div>
      <div>Count: {count}</div>
      <button onClick={onClick}>Next Number</button>
    </div>
  );
};

export default Example2;
