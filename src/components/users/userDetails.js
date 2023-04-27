import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export const UserDetails = () => {
    const {userId} = useParams()
    const[user, updateUser] = useState({})
    const [favorites, setFavorites] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${userId}`)
            .then(response => response.json())
            .then((data) => {
                const singleUser = data[0]
                updateUser(singleUser)
            })
        },
        [userId]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/favorites?userId=${userId}`)
            .then(response => response.json())
            .then(data => {
                setFavorites(data)
            })
        },
        [userId]
    )

    return (
    <div>
    <section className="user_profile_header">
        <header>User Profile</header>
    </section> 
    
    <section className="profile_info">
        <div className="profile_header">
            <h2>Profile Information</h2>
        </div>
        <div className="profile_details">
            <ul>
            <li>Name: {user.fullName}</li>
            <li>Address: {user.address}</li>
            <li>City: {user.city}</li>
            <li>State: {user.state}</li>
            <li>Zip: {user.zip}</li>
            <li>Email: {user.loginEmail}</li>
            </ul>
        </div>
        <div className="edit_button">
            <Link to="/editProfile">
            <button>Edit Profile</button>
            </Link>
        </div>
    </section>
    <section className="btnsUserFomos">
    <div className="btnUserCreatedFomo">
        <Link to="users/userFomos">
            <button className="btnCreatedFomo">FOMO's Created</button>
        </Link>
    </div>
    <div className="btnUserCreateFomo">
        <Link to="events/eventForm">
            <button className="btnCreateFomo">Create a FOMO</button>
        </Link>
    </div>
    </section>
    </div>
    )
}