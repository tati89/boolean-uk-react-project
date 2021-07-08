import { useState } from "react"
import { Link, Route } from "react-router-dom";
import "../css/sighnUp.css"

function SighnUp({users, setUsers}) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setemail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [usernameReg, setUsernameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [agreedToNews, setAgreedToNews] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        let newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            username: usernameReg,
            password: passwordReg,
            agreedToNews: agreedToNews
        }
        
        fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw Error("Failed to add new user");
          }
        })
        .then((newUser) => {
          setUsers([...users, newUser]);
        })
        .catch((error) => console.error(error));

        setFirstName("")
        setLastName("")
        setemail("")
        setPhoneNumber("")
        setUsernameReg("")
        setPasswordReg("")
        setAgreedToNews(false)

        e.target.reset()
    }
    
    return (
        <section className="wrapper-sighn-up">
        <form className="login-form" onSubmit={handleSubmit}  >
            <h2 className="register-title">Register</h2>
            <div className="first-last-name">
                <input onChange={(e) => setFirstName(e.target.value)} name="firstName" className="login-input" required placeholder="  Name..." ></input>
                <input onChange={(e) => setLastName(e.target.value)} name="lastName" className="login-input" placeholder="  Surname..."></input>
            </div>
            <div className="label">
                <label>Email</label>
            </div>
            <input onChange={(e) => setemail(e.target.value)} name="email"  className="login-input" required placeholder="  Email.."></input>
            <div className="label">
                <label>Phone number</label>
            </div>
            <input onChange={(e) => setPhoneNumber(e.target.value)} name="phoneNumber" className="login-input" required placeholder="  Phone number.."></input>
            <div className="label">
                <label>Username</label>
            </div>
            <input onChange={(e) => setUsernameReg(e.target.value)} name="username" className="login-input" required placeholder="  Username"></input>
            <div className="label">
                <label>Password</label>
            </div>
            <input onChange={(e) => setPasswordReg(e.target.value)}  name="password" className="login-input" required placeholder="  Password"></input>
            <div>
                <label className="newsLetters">Please tick this box to sign up for emails and get news and special offers. <input
                    id="agreedToNews"
                    name="agreedToNews"
                    value={agreedToNews}
                    type="checkbox"
                    onChange={(e) => setAgreedToNews(e.target.checked)}
                />
                </label>
            </div>
            <div>
                <Link to="/menu" className="nave-li"><button className="sighn-btn">Sighn up</button></Link>
            </div>
        </form>
      </section>
    )
}

export default SighnUp