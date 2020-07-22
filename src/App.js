import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js'

function App() {
  return (
        <header className="container-header"> 
        <a href="https://pixabay.com/" className="pixabay-logo"> </a>
        <SearchBar />
        <h2> Image Search </h2></header>    
  );
}

export default App;
