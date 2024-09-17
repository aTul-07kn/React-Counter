import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount]=useState(0);

  return (
    <div className='App'>
      <header className='header'>
        <h1>Local Counter App</h1>
      </header>

      <h2>count with aTul: {count}</h2>
      <button onClick={()=> setCount(0)}>RESET</button>
      <button onClick={()=> count>=15? setCount(0): setCount(count+1)}>INCREASE</button>
      <button onClick={()=> count<=0? setCount(0): setCount(count-1)}>DECREASE</button>
    </div>
  )
}

export default App;
