import { Link, useNavigate } from "react-router-dom"
import "./navBar.css"

export const Nav2 = () => {
    const navigate = useNavigate()

    return (
        <div className="block">
            <nav className="nav">
                <div className="nav-left">
                    <a className="nav-item">
                        <h1 className="title is-4">FOMO</h1>
                    </a>
                </div>

                <div className="nav-right nav-menu">

                    <Link className="nav-item" to="/events">Events</Link>

                    <Link className="nav-item" to="/users">My Profile</Link>

                    <Link className="nav-item" to="/users/userFaves">Favorites</Link>

                    {
                        localStorage.getItem("fomo_user")
                            ?
                            <Link className="nav-item" onClick={() => {
                                localStorage.removeItem("fomo_user")
                                navigate("/", { replace: true })
                            }}>Logout</Link>
                            : ""
                    }
                </div>
            </nav>
        </div >
    )
}

{/* <div className="navbar__item navbar__logout"></div> */ }