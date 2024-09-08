import React, { useState } from 'react'; // Make sure to import useState
import './App.css';
import AddMovies from './AddMovies';
import MoviesListe from './MoviesListe';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham, but he soon finds himself prey to a reign of chaos unleashed by a rising criminal mastermind known as the Joker.",

    },
  ]);

  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Add New Movies</h1>
        <AddMovies addNewMovie={addNewMovie} />
        <h1>Movies Liste</h1>
        <MoviesListe movies={movies} />
      </header>
    </div>
  );
}

export default App;