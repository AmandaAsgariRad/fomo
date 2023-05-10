import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export const UserDetails = () => {
    const[user, updateUser] = useState({})
    const localFomoUser = localStorage.getItem("fomo_user")
    const fomoUserObject = JSON.parse(localFomoUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${fomoUserObject.id}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                updateUser(data)
            })
        },
        []
    )


    return (
    <section className="profileDetails">
        <div className="is-size-2 has-text-centered">
            <h2>Profile Information</h2>
        </div>
        <div className="profile_details has-text-centered">
            <ul>
            <li>Name: {user?.fullName}</li>
            <li>Address: {user?.address}</li>
            <li>City: {user?.city}</li>
            <li>State: {user?.state}</li>
            <li>Zip Code: {user?.zip}</li>
            <li>Email: {user?.loginEmail}</li>
            </ul>
        </div>
        <div className="edit_button has-text-centered">
            <Link to="/editProfile">
            <button className="button is-small" id="btnEdit">Edit Profile</button>
            </Link>
        </div>
    <div className="btnUserCreatedFomo has-text-centered">
        <Link to="/userFomos">
            <button className="button is-small" id="btnCreated">FOMO's Created</button>
        </Link>
    </div>
    <div className="btnUserCreateFomo has-text-centered">
        <Link to="/eventForm">
            <button className="button is-small" id="btnCreate">Create a FOMO</button>
        </Link>
    </div>
    </section>
    )
}

{/* <div className="btnAdminFomos">
        <Link to="/adminFomos">
            <button className="btnAdminFomos">All User FOMO's Created</button>
        </Link>
    </div> */}