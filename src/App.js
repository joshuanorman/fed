import React from 'react';
// import logo from './images/sample-layout.png';
// import logo from './images/stanger-things_raw.png';
import './App.css';
import Gallery from './components/Gallery.js';
import Header from './components/Header.js';
import About from './components/About';
import Episodes from './components/Episodes';
import { LangProvider } from './LangContext';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <LangProvider>
    <Header />
    <Container >
    <About />
    <Gallery />
    <Episodes />
    </Container>
    </LangProvider>
  );
}

export default App;
