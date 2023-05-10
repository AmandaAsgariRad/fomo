import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./login.css"
// import fomoElectricImage from "fomo_electric.png"

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
        <main style={{ textAlign: "center" }} className="container--login">
            {/* <img src={fomoElectricImage} alt="Fomo" /> */}
            <section>
                <form className="form-login" onSubmit={handleLogin}>
                    <div className="is-size-2 has-text-centered">Login</div>
                    <fieldset className="email-input">
                        <label htmlFor="inputEmail">Enter email address </label>
                        <input type="email"
                        value={loginEmail}
                        onChange={event => setLoginEmail(event.target.value)}
                        className="form-control"
                        placeholder="required"
                        required autoFocus />
                    </fieldset>
                    <fieldset className="btn-sign-in">
                        <button className="button is-small" id="btnLogin" type="login_submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/createLogin">Not a member yet?</Link>
            </section>
        </main>
    )



}