import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [filled, setFilled] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (filled < 100) {
        setFilled(prevFilled => prevFilled + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [filled]);
  
  return (
    <div className='main'>
    <h1>Progress Bar</h1>
    <div className="progressBar" style={{border:filled<100 ? ' 1px solid white' : 'none'}}>
      <div className='box' style={{width:`${filled}%` }}></div>
      <span >{filled}%</span>
    </div>

    {filled < 99 ? (
      <p>Loading...</p>
    ) : (
      <p>Complete!</p>
    )}
  </div>
    
  );
}

export default App;
