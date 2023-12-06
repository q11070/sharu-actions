import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_VERSION}</h1>
    </div>
  );
}

export default App;
