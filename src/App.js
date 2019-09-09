import React from 'react';
// import logo from './images/sample-layout.png';
// import logo from './images/stanger-things_raw.png';
import './App.css';
import Gallery from './components/Gallery.js';
import Header from './components/Header.js';
import Translate from './components/Translate';
import About from './components/About';
import Test from './components/Test';
import { LangProvider } from './LangContext';
// import 'react-bootstrap';

function App() {
  return (
    <LangProvider>
    <div >
      <Header />
      <Translate />
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
        {/* <Test />  */}
        <About />
        <Gallery />
    </div>
    </LangProvider>
  );
}

export default App;
