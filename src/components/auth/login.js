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
            <form className="form-login" onSubmit={handleLogin}>
                <div className="title is-size-2 has-text-centered">Login</div>
                <div className="box has-text-centered">
                    <fieldset className="email-input">
                        <label htmlFor="inputEmail">Enter email address </label>
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
            
            <section className="link--register">
                <Link to="/createLogin">Not a member yet?</Link>
        </section>
                </div>
            </form>
            </section >
            </>
    )



}