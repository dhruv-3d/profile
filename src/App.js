import React from 'react';
import dhruv from './dhruv.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="intro">
          <img src={dhruv} className="App-logo" alt="logo" />
          <p className="whoami">
            <span className="my-name">Dhruv Desai</span>
            {/* <span className="status">Python & ReactJS Developer</span> */}
            <span className="status">Surat, Gujarat, India</span>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
