import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.css"

export const Login = () => {
    const [loginEmail, set] = useState("amanda_asgarirad@yahoo.com")
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

                navigate("/")
            }
            else {
                window.alert("Invalid Login")
            }
        })
    }

    return (
        <main style={{ textAlign: "center" }} className="container--login">
            <section>
                <form className="form-login" onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <fieldset>
                        <label htmlFor="inputEmail">Enter email address</label>
                        <input type="email"
                        value={loginEmail}
                        onChange={event => set(event.target.value)}
                        className="form-control"
                        placeholder="required"
                        required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/createLogin">Not a member yet?</Link>
            </section>
        </main>
    )



}