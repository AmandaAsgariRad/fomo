import { Outlet, Route, Routes } from "react-router-dom"
import { EventList } from "../events/eventList"
import { EditProfile } from "../users/editProfile"
import { UserDetails } from "../users/userDetails"
import { UserFaves } from "../users/userFaves"
import { CreateEvent } from "../events/eventForm"
import { UserFomos } from "../events/userFomos"
import { Events } from "../events/events"
import { GenreFilter } from "../events/genreFilter"

export const UserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <div className="user_slogan"><h3></h3></div>

                    <Outlet />
                </>
            }>
                <Route path="events" element={ <EventList />} />
                <Route path="users" element={ <UserDetails />} />
                <Route path="users/:favoriteId" element= { <UserFaves />} />
                <Route path="login_submit" element={ <EventList />} />
                <Route path="editProfile" element={ <EditProfile />} />
                <Route path="eventForm" element={ <CreateEvent />} />
                <Route path="userFomos" element={ <UserFomos />} />
                <Route path="events/:eventId" element={ <Events />} />
                <Route path="genreFilter" element={ <GenreFilter />} />
            </Route>
        </Routes>
    )
}
