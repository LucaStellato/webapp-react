import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export default function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const urlImage = 'http://localhost:3000/images/'

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                console.log(response)
                setMovie(response.data)

            })
    }, [])


    return (
        <>
            <div className="container d-flex">

                <img src={`${urlImage}${movie.image}`} className="" style={{ width: '200px' }} alt={movie.title} />



            </div>
        </>
    )
}