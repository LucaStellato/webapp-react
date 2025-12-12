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
            <div className="container d-flex mt-2">

                <img src={`${urlImage}${movie.image}`} className="" style={{ width: '200px' }} alt={movie.title} />
                <div className="justify-content-center ms-5">
                    <h1>{movie.title}</h1>
                    <span>{movie.abstract}</span>

                </div>

            </div>
            <div className="text-center">
                <strong>LASCIA UN TUO FEED</strong>
                <div class="mb-3 m-4">
                    <label for="name" class="form-label">Insert your name</label>
                    <input type="text" class="form-control" id="name" placeholder="name" />
                </div>
                <div class="mb-3 m-4">
                    <label for="Select" class="form-label"> select Star</label>
                    <select id="start" class="form-select">
                        <option>select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <div class="mb-3 m-4">
                    <label for="Review" class="form-label">Leave your review</label>
                    <textarea class="form-control" id="review" rows="3"></textarea>
                </div>
            </div>

        </>
    )
}