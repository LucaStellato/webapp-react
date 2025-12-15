import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import FormReview from "./FormReview";

export default function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const urlImage = 'http://localhost:3000/images/'

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                console.log(response)
                setMovie(response.data)

            })
    }, [id])

    function getRating(vote) {
        let stars = []
        for (let i = 0; i < vote; i++) {
            stars.push(<i className="bi bi-star-fill" key={`fill-${i}`}></i>)
        }
        //console.log(stars);
        for (let i = vote; i < 5; i++) {
            stars.push(<i className="bi bi-star" key={`${i}`}></i>)
        }
        return stars
    }








    return (

        <>
            {movie &&
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

                        <FormReview id={id} />

                    </div>



                    <div className="text-center">
                        <strong>COSA PENSANO GLI ALTRI UTENTI</strong>
                    </div>

                    {movie && movie.reviews && movie.reviews.map((review) => (
                        <div className="card p-3 mb-3" key={review.id}>
                            <strong>{review.name}</strong>
                            <p>
                                {review.text}
                            </p>
                            <div className="rating">
                                {getRating(review.vote)}
                            </div>
                        </div>
                    ))}
                </>
            }
        </>
    )
}