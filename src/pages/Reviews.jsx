import { useState } from "react";
import { Link, Route } from "react-router-dom";
import "../css/reviews.css";

function Reviews({ reviews }) {
  return (
    <section className="reviews">
      <h1 className="review-hero">WHAT OUR CUSTOMERS SAY..</h1>
      <div className="reviews-wrapper">
        {reviews.map((review) => (
          <div className="review-card">
            <div className="top-card">
              <div className="frame-img-review">
                <img src={review.img} alt="img" />
              </div>
              <div className="user-details">
                <spa className="name-surname">
                  {review.firstName} {review.lasrName}
                </spa>
                <span className="city">{review.city}</span>
              </div>
            </div>
            <blockquote>{review.text}</blockquote>
          </div>
        ))}
      </div>
      <div className="add-review-wrapper">
        <Link to="/AddReview">
          <button className="review-button">ADD REVIEW</button>
        </Link>
      </div>
    </section>
  );
}

export default Reviews;
