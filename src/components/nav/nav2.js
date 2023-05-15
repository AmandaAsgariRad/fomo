import { Link, useNavigate } from "react-router-dom"
import "./navBar.css"

export const Nav2 = () => {
    const navigate = useNavigate()

    return (
        <>
            <nav className="logo-container">
              <img src="../images/fomoLogo.jpg" alt="fomo logo" className="logo" />
            </nav>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                  <Link className="navbar-item" to="/events">Events</Link>
                  <Link className="navbar-item" to="/users">My Profile</Link>
                  <Link className="navbar-item" to="/users/userFaves">Favorites</Link>
                  {
                    localStorage.getItem("fomo_user") ?
                      <Link className="navbar-item" onClick={() => {
                        localStorage.removeItem("fomo_user")
                        navigate("/", { replace: true })
                      }}>Logout</Link>
                      : ""
                  }
                  
            </nav>
         
    </>
    )
        }

