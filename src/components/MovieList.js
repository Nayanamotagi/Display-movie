import React from "react";

function MovieList({ movies }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))
      ) : (
        <p>Find your favourite movies.</p>
      )}
    </div>
  );
}

export default MovieList;
