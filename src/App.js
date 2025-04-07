import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>シンプルReactアプリ</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 ダークモード' : '☀️ ライトモード'}
        </button>
      </header>
      <main>
        <div className="counter-container">
          <h2>カウンター: {count}</h2>
          <div className="button-group">
            <button onClick={decrementCount}>減らす</button>
            <button onClick={incrementCount}>増やす</button>
          </div>
        </div>
      </main>
      <footer>
        <p>Created with React - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;