import { useState } from "react";
import "../css/addReview.css";

function AddReview({ reviews, setReviews }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [avatar, setAvatar] = useState("");
  const [city, setCity] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newReview = {
      firstName: name,
      lasrName: surname,
      text: text,
      city: city,
      img: avatar,
    };

    fetch("http://localhost:4000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Failed to add review");
        }
      })
      .then((newReview) => {
        setReviews([...reviews, newReview]);
      })
      .catch((error) => console.error(error));

    e.target.reset();
    alert("Your review has been posted");
  }
  return (
    <section className="post-review-wrapper">
      <form className="post-review-form" onSubmit={handleSubmit}>
        <h2 className="register-title">New Review</h2>
        <div className="first-last-name">
          <input
            onChange={(e) => setName(e.target.value)}
            name="firstName"
            className="login-input"
            required="true"
            placeholder="  Name..."
          ></input>
          <input
            onChange={(e) => setSurname(e.target.value)}
            name="lastName"
            required="true"
            className="login-input"
            placeholder="  Surname..."
          ></input>
        </div>
        <div className="label">
          <label>Avatar</label>
        </div>
        <input
          onChange={(e) => setAvatar(e.target.value)}
          name="img"
          className="login-input"
          required="true"
          placeholder="  img.."
        ></input>
        <div className="label">
          <label>City</label>
        </div>
        <input
          onChange={(e) => setCity(e.target.value)}
          name="city"
          className="login-input"
          required="true"
          placeholder="  City"
        ></input>
        <div className="label">
          <label>Message</label>
        </div>
        <textarea
          onChange={(e) => setText(e.target.value)}
          name="text"
          type="text"
          className="login-input"
          required="true"
          placeholder="  Your review..."
        ></textarea>
        <div>
          <button className="sighn-btn">POST</button>
        </div>
      </form>
    </section>
  );
}

export default AddReview;
