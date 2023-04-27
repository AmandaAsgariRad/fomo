import { Route, Routes } from "react-router-dom"
import { CreateLogin } from "./auth/createLogin"
import { Login } from "./auth/login"
import { ApplicationViews } from "./views/applicationViews"
import { Authorized } from "./views/authorized"
import { NavBar } from "./nav/navBar"

export const Fomo = () => {
    
return <Routes>
    
    <Route path="/login" element={<Login />} />
    <Route path="/createLogin" element={<CreateLogin />} />

    <Route path="*" element={
        <Authorized>
            <>
            <NavBar />
            <ApplicationViews />
            </>
        </Authorized>
    } />

    </Routes>
}