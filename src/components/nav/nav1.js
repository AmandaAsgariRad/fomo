import { Link } from "react-router-dom"

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
                <Link className="navbar_link" to="/create">Create Profile</Link>
            </li>
        </ul>
    )
}