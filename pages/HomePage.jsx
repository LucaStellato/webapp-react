import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios'
export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const endpoint = 'http://localhost:3000/movies'
    const urlImage = 'http://localhost:3000/images/'
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
            <h1 style={{ textAlign: 'center' }}>Movie list</h1>
            <div className="row h-100 justify-content-center">
                {movies.map((movie) => (
                    <div className="card m-2" style={{ width: '18rem' }} key={movie.id}>
                        <img src={`${urlImage}${movie.image}`} className="card-img-top" alt={movie.title} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.abstract}</p>
                            <Link to={`/movies/${movie.id}`} className='btn btn-primary'>More</Link>


                        </div>
                    </div>
                ))}
            </div>
        </>
    )
} 
