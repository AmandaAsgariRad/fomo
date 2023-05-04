import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./login.css"

export const CreateLogin = () => {
    const [user, setUser] = useState({
        loginEmail: "",
        isAdmin: false
    })


let navigate = useNavigate()

const createNewUser = () => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(createdUser => {
            if (createdUser.hasOwnProperty("id")) {
                localStorage.setItem("fomo_user", JSON.stringify({
                    id: createdUser.id,
                    admin: createdUser.admin
                }))

                navigate("/events")
            }
        })
}

const handleCreate = (e) => {
    e.preventDefault()
    return fetch(`http://localhost:8088/users?loginEmail=${user.loginEmail}`)
    .then(response => response.json())
    .then(response => {
        if (response.length > 0) {
            window.alert("Account with that email address already exists")
        }
        else {
            createNewUser()
        }
    })
}

const updateUser = (event) => {
    const copy = {...user}
    copy[event.target.id] = event.target.value
    setUser(copy)
}

return (
    <main style={{ textAlign: "center" }}>
        <form className="form--login" onSubmit={handleCreate}>
            <h1 className="create_profile">Create A Profile</h1>
            <fieldset>
                <label htmlFor="fullName">Full Name</label>
                <input onChange={updateUser}
                    type="text"
                    id="fullName"
                    className="form-control"
                    placeholder="required"
                    required autoFocus/>
            </fieldset>
            <fieldset>
                <label htmlFor="address">Address</label>
                <input onChange={updateUser}
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="required"
                    required autoFocus />
            </fieldset>
            <fieldset>
                <label htmlFor="city">City</label>
                <input onChange={updateUser}
                    type="text"
                    id="city"
                    className="form-control"
                    placeholder="required"
                    required autoFocus />
            </fieldset>
            <fieldset>
            <label htmlFor="state">State</label>
                <input onChange={updateUser}
                    type="text"
                    id="state"
                    className="form-control"
                    placeholder="required"
                    required autoFocus />
            </fieldset>
            <fieldset>
            <label htmlFor="zip">Zip</label>
                <input onChange={updateUser}
                    type="number"
                    id="zip"
                    className="form-control"
                    placeholder="required"
                    required
                    pattern="[0-9]{5}" />
            </fieldset>
            <fieldset>
            <label htmlFor="email">Email for Login</label>
                <input onChange={updateUser}
                    type="email"
                    id="loginEmail"
                    className="form-control"
                    placeholder="required"
                    required autoFocus />
            </fieldset>
            <fieldset>
                    <button type="submit">Create Profile</button>
                </fieldset>
            <h3>Already a Member?</h3>
            <section className="link--login">
                <Link to="/login">Log In</Link>
            </section>
        </form>

    </main>
    
)
}