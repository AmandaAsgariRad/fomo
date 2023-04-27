import { BrowserViews } from "./browserViews"
import { UserViews } from "./userViews"

export const ApplicationViews = () => {
    const localFomoUser = localStorage.getItem("fomo_user")
    const fomoUserObject = JSON.parse(localFomoUser)

    if (fomoUserObject) {
        return <UserViews />
    }
    else {
        return <BrowserViews />
    }
}