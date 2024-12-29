// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './homestyle.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);

    const apiKey = 'dea2b8ad'; // Replace with your OMDB API key

    // Fetch default movies or trending movies
    const fetchDefaultMovies = async () => {
        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?s=Avengers&apikey=${apiKey}`
            );
            if (response.data.Search) {
                setMovies(response.data.Search);
            } else {
                setError('No default movies found.');
            }
        } catch (err) {
            setError('Failed to fetch default movies.');
        }
    };

    // Fetch movies based on search query
    const fetchMoviesByQuery = async () => {
        if (query.trim() === '') {
            fetchDefaultMovies(); // If search is empty, fetch default movies
            return;
        }

        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
            );
            if (response.data.Search) {
                setMovies(response.data.Search);
                setError(null);
            } else {
                setMovies([]);
                setError(`No results found for "${query}".`);
            }
        } catch (err) {
            setError('Failed to fetch movies. Please try again later.');
        }
    };

    useEffect(() => {
        fetchDefaultMovies();
    }, []);

    return (
        <div className="home-container">
           

            <div className="movies-grid">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className="movie-poster"
                        />
                        <h2 className="movie-title">{movie.Title}</h2>
                        <p className="movie-year">Year: {movie.Year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
