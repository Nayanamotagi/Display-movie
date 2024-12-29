import React, { useState } from "react";
import MovieList from "./components/MovieList";
import axios from "axios";


function App() {
  

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const apiKey = "dea2b8ad";

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>OMDB Movie Search</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={searchMovies} style={{ padding: "10px 20px" }}>
        Search
      </button>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
