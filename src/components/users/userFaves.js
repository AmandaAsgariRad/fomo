import { useEffect, useState } from "react"

export const UserFaves = () => {
    const [favorites, setFavorites] = useState([])
    const [user, updateUser] = useState({})
    
    
    const localFomoUser = localStorage.getItem("fomo_user")
    const fomoUserObject = JSON.parse(localFomoUser)
    
    useEffect(() => {
        fetch(`http://localhost:8088/favorites`)
        .then(response => response.json())
        .then((data) => {
            setFavorites(data)
        })
    }, [])
    
    useEffect(() => {
        fetch(`http://localhost:8088/users/${fomoUserObject.id}`)
        .then(response => response.json())
        .then((data) => {
            updateUser(data)
        })
    }, [])
    
    const userFavorites = favorites.filter((favorite) => favorite.userId === user.id)

    return (
        <section className="favorites-container">
            <div className="header_faves">
                <header>Favorites</header>
            </div>
            <div className="favoriteDisplay">
                {userFavorites.length > 0 ? (
                    <ul>
                        {favorites?.map((favorite) => (
                            <li key={favorite.id}>{favorite.eventId}</li>
                        ))}
                    </ul>
                ) : (
                    <h3>You have no favorites</h3>
                )}

            </div>
        </section>
    )
}