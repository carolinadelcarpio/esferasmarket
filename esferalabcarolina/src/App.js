import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AppContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <header className="App-header">
      <AppContainer />
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
      </header>
    </div>
  );
}

export default App;
