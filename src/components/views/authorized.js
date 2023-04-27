import { Navigate, useLocation } from "react-router-dom"

export const Authorized = (children) => {
    const location = useLocation()

    if (localStorage.getItem("fomo_user")) {
        return children
    }
    else {
        return <Navigate to={`/homePage/${location.search}`} replace state={{ location }} />
    }
}