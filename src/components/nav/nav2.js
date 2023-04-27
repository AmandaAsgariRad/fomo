import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const Nav2 = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/events">Events</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/users">My Profile</Link>
            </li>
            {
                localStorage.getItem("fomo_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("fomo_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}