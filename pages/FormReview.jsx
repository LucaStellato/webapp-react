import { useState } from "react";
import axios from "axios";
export default function FormReview({ id }) {
    const initialFormState = {
        name: "",
        vote: "",
        text: ""
    };
    const [formData, SetFormData] = useState(initialFormState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log("form submitted");

        axios.post(`http://localhost:3000/movies/${id}/reviews`, formData)
            .then((response) => {
                console.log("review submitted successfully", response.data);

            })
            .catch((error) => {
                console.error("error submitting review", error)
            })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 m-4">
                    <label htmlFor="name" className="form-label">Insert your name</label>
                    <input type="text" className="form-control" id="name" placeholder="name" value={formData.name} onChange={(e) => SetFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="mb-3 m-4">
                    <label htmlFor="Select" className="form-label"> select Star</label>
                    <select id="start" className="form-select" value={formData.vote} onChange={(e) => SetFormData({ ...formData, vote: e.target.value })}>
                        <option>select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <div className="mb-3 m-4">
                    <label htmlFor="Review" className="form-label">Leave your review</label>
                    <textarea className="form-control" id="text" rows="3" value={formData.text} onChange={(e) => SetFormData({ ...formData, text: e.target.value })}></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>

        </>
    )
}
