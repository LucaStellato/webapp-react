import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FormReview from "./FormReview";

export default function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const urlImage = 'http://localhost:3000/images/';

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                console.log(response);
                setMovie(response.data);
            });
    }, [id]);

    function getRating(vote) {
        let stars = [];
        for (let i = 0; i < vote; i++) {
            stars.push(<i className="bi bi-star-fill text-warning " key={`fill-${i}`}></i>);
        }
        for (let i = vote; i < 5; i++) {
            stars.push(<i className="bi bi-star" key={`${i}`}></i>);
        }
        return stars;
    }

    return (
        <>
            <div className="container">
                {movie && (
                    <div className="row mt-3">

                        <div className="col-3">
                            <img
                                src={`${urlImage}${movie.image}`}
                                style={{ width: '200px' }}
                                alt={movie.title}
                            />
                        </div>


                        <div className="col-5">
                            <h1>{movie.title}</h1>
                            <span>{movie.abstract}</span>
                        </div>


                        <div className="col-3">
                            <div className="card p-2">
                                <h4 className="ms-4">Dacci un feed</h4>
                                <FormReview id={id} />
                            </div>
                        </div>
                    </div>
                )}

                <div className="text-center mt-4">
                    <strong>COSA PENSANO GLI ALTRI UTENTI</strong>
                </div>

                {movie && movie.reviews && movie.reviews.map((review) => (
                    <div className="card p-3 mb-3" key={review.id}>
                        <strong>{review.name}</strong>
                        <p>{review.text}</p>
                        <div className="rating">
                            {getRating(review.vote)}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
