import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_VERSION}
    </div>
  );
}

export default App;
