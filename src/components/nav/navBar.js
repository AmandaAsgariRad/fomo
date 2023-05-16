
import { Nav2 } from "./nav2"
import "./navBar.css"

export const NavBar = () => {
    const localFomoUser = localStorage.getItem("fomo_user")
    const fomoUserObject = JSON.parse(localFomoUser)

    return (<Nav2/>)
}
