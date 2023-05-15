import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./users.css"

export const UserDetails = () => {
    const [user, updateUser] = useState({})
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
            <h2 className="title-container is-size-1 has-text-centered">Profile Information</h2>
            <div className="box has-text-centered">
                <ul>
                    <li>{user?.fullName}</li>
                    <li>{user?.address}</li>
                    <li>{user?.city}</li>
                    <li>{user?.state}</li>
                    <li>{user?.zip}</li>
                    <li>{user?.loginEmail}</li>
                </ul>
            <div className="button-container has-margin-top">
                <div className="btnEdit has-text-centered">
                    <Link to="/editProfile">
                        <button className="button is-small" id="btnEdit">Edit Profile</button>
                    </Link>
                </div>
            </div>

            <div className="button-container has-margin-top">
                <div className="btnUserCreatedFomo has-text-centered">
                    <Link to="/userFomos">
                        <button className="button is-small" id="btnCreated">FOMO's Created</button>
                    </Link>
                </div>
            </div>

            <div className="button-container has-margin-top">
                <div className="btnUserCreateFomo has-text-centered">
                    <Link to="/eventForm">
                        <button className="button is-small" id="btnCreate">Create a FOMO</button>
                    </Link>
                </div>
                </div>
            
                   
                    </div>
        </section>
    )
}
