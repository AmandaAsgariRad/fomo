import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import "./users.css"

export const EditProfile = () => {
    const [user, updatedUser] = useState({
        fullName: "",
        address: "",
        city: "",
        state: "",
        zip: 0,
        loginEmail: ""
    })

    const { userId } = useParams()
    const navigate = useNavigate()
    const localFomoUser = localStorage.getItem("fomo_user")
    const fomoUserObject = JSON.parse(localFomoUser)


    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${fomoUserObject.id}`)
                .then(response => response.json())
                .then((data) => {
                    updatedUser(data)
                })
        },
        []
    )

    const getProfile = () => {
        return fetch(`http://localhost:8088/users/${fomoUserObject.id}`)
                .then(response => response.json())
                .then((data) => {
                    updatedUser(data)
                })
    }


    const handleUpdateButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/users/${fomoUserObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(() => {
                navigate(`/users`)

            })
    }

    return <form>
        <div className="title is-size-2 has-text-centered">
        <h2>Edit Profile</h2>
        <div className="box has-text-centered">
        <fieldset>
            <div className="form-group">
                <label htmlFor="fullName">Full Name: </label>
                <input type="text" className="form-control" value={user.fullName} onChange={
                    (evt) => {
                        const copy = { ...user }
                        copy.fullName = evt.target.value
                        updatedUser(copy)
                    }
                } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="address">Address: </label>
                <input type="text" className="form-control" value={user.address} onChange={
                    (evt) => {
                        const copy = { ...user }
                        copy.address = evt.target.value
                        updatedUser(copy)
                    }
                } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="city">City: </label>
                <input type="text" className="form-control" value={user.city} onChange={
                    (evt) => {
                        const copy = { ...user }
                        copy.city = evt.target.value
                        updatedUser(copy)
                    }
                } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="state">State: </label>
                <input type="text" className="form-control" value={user.state} onChange={
                    (evt) => {
                        const copy = { ...user }
                        copy.state = evt.target.value
                        updatedUser(copy)
                    }
                } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="zip">Zip Code: </label>
                <input type="number" className="form-control" pattern="[0-9]{5}" value={user.zip} onChange={
                    (evt) => {
                        const copy = { ...user }
                        copy.zip = evt.target.value
                        updatedUser(copy)
                    }
                } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="loginEmail">Log In Email: </label>
                <input type="email" className="form-control" value={user.loginEmail} onChange={
                    (evt) => {
                        const copy = { ...user }
                        copy.loginEmail = evt.target.value
                        updatedUser(copy)
                    }
                } />
            </div>
        </fieldset>
        <div className="button-container has-margin-top">
        <button className="button is-small is-primary" id="updateBtn" onClick={(event) =>
            handleUpdateButtonClick(event)}>Update</button>
            </div>
            </div>
            </div>
    </form>
}