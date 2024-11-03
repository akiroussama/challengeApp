import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [featureOn, setFeatureOn] = useState(false);
  // this is a test app ! 
  return (
    <div>
      <h1>Welcome to the TDD Challenge</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Hello, User!</p>
      <button onClick={() => setFeatureOn(!featureOn)}>Toggle Feature</button>
      <p>Feature is {featureOn ? 'ON' : 'OFF'}</p> 
      <h2>ON</h2>
    </div>
  );
}

export default App;