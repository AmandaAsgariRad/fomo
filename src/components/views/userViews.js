import { Outlet, Route, Routes } from "react-router-dom"
import { EventList } from "../events/eventList"
import { UserDetails } from "../users/userDetails"
import { UserFaves } from "../users/userFaves"

export const UserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <div className="user_slogan"><h3>Browse local events and add your favorites or create new events from your profile!</h3></div>

                    <Outlet />
                </>
            }>
                <Route path="events" element={ <EventList />} />
                <Route path="users" element={ <UserDetails />} />
                <Route path="users/userFaves" element= { <UserFaves />} />
            </Route>
        </Routes>
    )
}
