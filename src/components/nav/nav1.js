import { Link } from "react-router-dom"
import "./navBar.css"

export const Nav1 = () => {

    return (
        <ul className="navbar">
            <li className="navbar_item active">
                <Link className="navbar_link" to="/events">Events</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to="/login">Log In</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to="/createLogin">Create Profile</Link>
            </li>
        </ul>
    )
}