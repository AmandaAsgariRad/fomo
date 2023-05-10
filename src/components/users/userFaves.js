import { useEffect, useState } from "react"
import { FaSpotify, FaYoutube } from "react-icons/fa"

export const UserFaves = () => {
    const [favorites, setFavorites] = useState([])
    const [user, updateUser] = useState({})
    const [userFaves, setUserFaves] = useState([])

    const localFomoUser = localStorage.getItem("fomo_user")
    const fomoUserObject = JSON.parse(localFomoUser)

    useEffect(() => {
        fetch(`http://localhost:8088/favorites?&_expand=event`)
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

    useEffect(() => {
        const userFavorites = favorites.filter((favorite) => favorite.userId === user.id)
        setUserFaves(userFavorites)
    }, [favorites])
    

    return (
        <div className="block">
            <div className="is-size-2 has-text-centered">
                <h2>Favorites</h2>
            </div>
        <div className="block">
            <div className="card">
                {userFaves.length > 0 ? (
                    <div className="card-content">
                        {userFaves.map((userFavorite) => (
                            <div key={`${userFavorite.id}`} className="event-container">
                                <section className="event">
                                    <div className="image">
                                        <img src={userFavorite?.event?.image} alt={userFavorite.name} />
                                    </div>
                                    <div className="artistName">
                                        <h2>{userFavorite?.event?.name}</h2>
                                    </div>
                                    <div className="genre">
                                        <h4>{userFavorite?.event?.genre?.type}</h4>
                                    </div>
                                    <div className="venue">
                                        <h4>At {userFavorite?.event?.venue}</h4>
                                    </div>
                                    <div className="when">
                                        <h4>On {userFavorite?.event?.when}</h4>
                                    </div>
                                    <div className="spotifyLink">
                                        {userFavorite.spotify && (
                                            <a href={userFavorite?.event?.spotify} target="_blank" rel="external">
                                                <FaSpotify />
                                            </a>
                                        )}
                                    </div>
                                    <div className="youTubeLink">
                                        {userFavorite.youTube && (
                                            <a href={userFavorite?.event?.youTube} target="_blank" rel="external">
                                                <FaYoutube />
                                            </a>
                                        )}
                                    </div>
                                    <div className="infoLink">
                                        {userFavorite.infoLink && (
                                            <a href={userFavorite?.event?.infoLink} target="_blank" rel="external">
                                                <h4>Info Link</h4>
                                            </a>
                                        )}
                                    </div>
                                    </section>
                                    </div>
                        ))}
                        </div>
                                    )
                                     : (
                                    <h3>You have no favorites</h3>
                )}

                            </div>
        </div>
        </div>
                )
}