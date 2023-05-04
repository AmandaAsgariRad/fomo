import { Outlet, Route, Routes } from "react-router-dom"
import { CreateLogin } from "../auth/createLogin"
import { Login } from "../auth/login"
import { EventList } from "../events/eventList"

export const BrowserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                <div className="browse_events"><h3>Browse Events</h3></div>
                
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
