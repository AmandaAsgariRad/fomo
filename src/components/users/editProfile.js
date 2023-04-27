import { useState } from "react"

export const EditProfile = () => {
    const [user, updatedUser] = useState({
        fullName: "",
        address: "",
        city: "",
        state: "",
        zip: 0,
        loginEmail: ""
    })
    
    
    return <form className="editProfileForm">
        
    </form>
}