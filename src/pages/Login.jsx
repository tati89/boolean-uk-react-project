import { useState } from "react"
import { Link, Router } from "react-router-dom";
import "../css/login.css"

function Login({users, setUsers, loggedinUser,setloggedinUser }) {
    const [username, setUsename] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (username && password) {
            const matchinUser = users.find(user => (user.username === username && user.password === password))
            setloggedinUser(matchinUser)
        } 
    }

    return (
        <section className="wrapper">
        <form className="login-form" onSubmit={handleSubmit}  >
            <h2 className="login-title">Login</h2>
            <div className="label">
                <label>Username</label>
            </div>
            <input onChange={(e) => setUsename(e.target.value)} name="username" className="login-input" placeholder="  Username"></input>
            <div className="label">
                <label>Password</label>
            </div>
            <input onChange={(e) => setPassword(e.target.value)} name="password" className="login-input" placeholder="  Password"></input>
            <div>
                <button className="sighn-btn">Sighn in</button>
            </div>
            <div className="sighn-up">
                <h3 className="dont-have-account-title">Dont have an account?</h3>
                <Link className="sighn-up-link" to="/sighnUp" >Sighn up</Link>
                
            </div>
        </form>
      </section>
    )
}

export default Login