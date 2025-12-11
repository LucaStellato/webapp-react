import { useState } from 'react'
import { useEffect } from 'react'

import axios from 'axios'
export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const endpoint = 'http://localhost:3000/movies'
    useEffect((fetchMovies) => {
        axios.get(endpoint)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error("Errore nel recupero dei film:", error);
            });
    })
    return (
        <>
            {movies.map((movie) => (
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{movie.title}</h5>
                        <p class="card-text">{movie.abstract}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            ))}
        </>
    )
} 
