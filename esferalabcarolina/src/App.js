import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AppContainer from './Components/ItemListContainer/ItemListContainer';
import FunctionCounter from './Components/FunctionCounter/FunctionCounter';

function App() {
  return (
    <div className="App">
      <FunctionCounter initial={1}/>
      <React.StrictMode>
      <NavBar />
      </React.StrictMode>
      <AppContainer />
      {<header className="App-header">
        <a>
          ESFERA LABS - Laboratorio 3D
        </a>
      </header>}
    </div>
  );
}

export default App;
