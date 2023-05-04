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
        <div className="profile_header">
            <h2>Profile Information</h2>
        </div>
        <div className="profile_details">
            <ul>
            <li>Name: {user?.fullName}</li>
            <li>Address: {user?.address}</li>
            <li>City: {user?.city}</li>
            <li>State: {user?.state}</li>
            <li>Zip Code: {user?.zip}</li>
            <li>Email: {user?.loginEmail}</li>
            </ul>
        </div>
        <div className="edit_button">
            <Link to="/editProfile">
            <button>Edit Profile</button>
            </Link>
        </div>
    <div className="btnUserCreatedFomo">
        <Link to="/userFomos">
            <button className="btnCreatedFomo">FOMO's Created</button>
        </Link>
    </div>
    <div className="btnUserCreateFomo">
        <Link to="/eventForm">
            <button className="btnCreateFomo">Create a FOMO</button>
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