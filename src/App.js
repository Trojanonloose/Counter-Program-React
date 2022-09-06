import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Counter Program</h1>
      <div className='container'>
        <p>Count Value = <span>{count}</span></p>
        <div className='buttoncontainer'>
          <button className='btn' onClick={() => setCount(count + 1)}>+</button>
          <button className='btn' onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>



  );
}

export default App;
