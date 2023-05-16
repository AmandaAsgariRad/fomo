import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./login.css"


export const Login = () => {
    const [loginEmail, setLoginEmail] = useState("amanda_asgarirad@yahoo.com")
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/users?loginEmail=${loginEmail}`)
            .then(response => response.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("fomo_user", JSON.stringify({
                        id: user.id,
                        admin: user.isAdmin
                    }))

                    navigate("/events")
                }
                else {
                    window.alert("Invalid Login")
                }
            })
    }

    return (
        <>
        <section>
        <nav className="logo-container">
              <img src="../images/fomoLogo.jpg" alt="fomo logo" className="logo" />
            </nav>
            <div className="genre-container has-margin-top has-text-centered">
                        <div className="description is-size-3">Don't let the Fear Of Missing Out control your life.
                        </div>
                        <div className="description is-size-5">Discover exciting Nashville events and experiences with our website, and never miss out again!
                        </div>
            </div>
            <form className="form-login" onSubmit={handleLogin}>
                <div className="title-container">
                <div className="title is-size-1 has-text-centered">Login</div>
                </div>
                <div className="box has-text-centered">
                    <fieldset className="email-input">
                        <label htmlFor="inputEmail">Enter email address: </label>
                        <input type="email"
                            value={loginEmail}
                            onChange={event => setLoginEmail(event.target.value)}
                            className="form-control"
                            placeholder="required"
                            required autoFocus />
                    </fieldset>
                    <div className="button-container has-margin-top">
                        <button className="button is-small" id="btnLogin" type="submit">Sign In</button>
                    </div>

                    <h4 className="register">Not a member?</h4>
            
            <section className="link--register">
                <Link to="/createLogin">Get Started</Link>
        </section>
                </div>
            </form>
            </section >
            </>
    )



}