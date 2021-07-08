import { useState } from "react"
import "../css/reviews.css"

function Reviews() {
    // const [name, setName] = useState("")
    // const [surname, setSurname] = useState("")
    // const [city, setCity] = useState("")
    // const [description, setDescription] = useState("")

    return (
        <section className="reviews">
            <div className="reviews-wrapper">
                <div className="review-card">
                    <div className="top-card">
                       <div className="frame-img-review">
                           <img src="https://images.pexels.com/photos/2531182/pexels-photo-2531182.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="img" />
                       </div>
                       <div>
                           <spa className="name-surname">Lenny De</spa>
                           <span className="product-title">London</span>
                       </div>
                    </div>
                    <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a, rerum voluptas, totam est autem ab quia voluptatem magnam omnis</blockquote>       
                </div> 

                <div className="add-review-wrapper">
                    <button>ADD REVIEW</button>
                </div>
            </div>
        </section>
    )
}

export default Reviews