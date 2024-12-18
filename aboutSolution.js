```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval;
    const startInterval = () => {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    };
    const stopInterval = () => {
      clearInterval(interval);
    };
    startInterval();
    return () => {
      stopInterval();
    };
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```