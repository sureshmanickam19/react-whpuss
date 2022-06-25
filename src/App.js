import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        {' '}
        +{' '}
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        {' '}
        -{' '}
      </button>
      <button
        onClick={() => {
          setNum(0);
        }}
      >
        {' '}
        Reset{' '}
      </button>

      <p>{num}</p>
    </div>
  );
};

export default App;
