import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_VERSION}</h1>
      <span>&#x2318</span>
    </div>
  );
}

export default App;
