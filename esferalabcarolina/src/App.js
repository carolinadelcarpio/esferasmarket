import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AppContainer from './Components/ItemListContainer';
import FunctionCounter from './Components/FunctionCounter.js/FunctionCounter';

function App() {
  return (
    <div className="App">
      <FunctionCounter initial={1}/>
      <React.StrictMode>
      <NavBar/>
      </React.StrictMode>
      {<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ESFERA LABS - Laboratorio 3D
        </a>
      </header>}
    </div>
  );
}

export default App;
