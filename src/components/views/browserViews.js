import { Outlet, Route, Routes } from "react-router-dom"
import { CreateLogin } from "../auth/createLogin"
import { Login } from "../auth/Login"
import { EventList } from "../events/eventList"
import { UserDetails } from "../users/userDetails"

export const BrowserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                <div className="browse_events"><h3>Browse events and create a profile to add your favorites or create new events!</h3></div>
                
                <Outlet />
                </>
            }>
                <Route path="events" element={ <EventList />} />
                <Route path="auth/login" element={ <Login />} />
                <Route path="auth/createLogin" element={ <CreateLogin />} />

            </Route>
        </Routes>
    )
}
