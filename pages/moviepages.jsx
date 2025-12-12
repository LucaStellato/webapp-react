import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function moviepages() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/${id}`)
    })

    return (
        <></>
    )
}