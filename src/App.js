import React from 'react';
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
