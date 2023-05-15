import { useState, useEffect } from "react"
import { FaHeart, FaSpotify, FaYoutube } from "react-icons/fa"
import "./events.css"

export const Events = ({ id, userId, genreId, venue, when, image, name, spotify, youTube, infoLink }) => {

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const localFomoUser = localStorage.getItem("fomo_user")
        const fomoUserObject = JSON.parse(localFomoUser)

        fetch(`http://localhost:8088/favorites?userId=${fomoUserObject.id}&eventId=${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    setIsFavorite(true)
                }
            })
            .catch((error) => console.log(error))
    }, [id])

    const handleFavoriteClick = (event) => {
        event.preventDefault()

        const localFomoUser = localStorage.getItem("fomo_user")
        const fomoUserObject = JSON.parse(localFomoUser)

        if (isFavorite) {
            fetch(`http://localhost:8088/favorites?userId=${fomoUserObject.id}&eventId=${id}`, {
                method: "DELETE"
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.length > 1) {
                        setIsFavorite(false)
                    }
                })
                    
        }

        else {
            const favoriteData = {
                userId: fomoUserObject.id,
                eventId: id
            }

            fetch(`http://localhost:8088/favorites`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(favoriteData)
            })
                .then((response) => response.json())
                .then(() => setIsFavorite(true))
                .catch((error) => console.log(error))
        }
    }
    return (
        <div className="block">

                   
                        <div className="card">
                            <div className="card-content has-padding">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                    <img src={image} alt={name} />
                                    </figure>
                                </div>
                                
                                <div className="title-container has-margin-top has-text-centered">
                                <h2 className="title is-size-4">{name}</h2>
                                <div className="title-underline"></div>
                                </div>
                                
                                <div className="genre-container has-margin-top has-text-centered">
                                <div className="subtitle is-size-6 has-text-grey">{genreId}
                                </div>
                                
                                
                                <div className="subtitle is-size-6 has-text-grey">Where: {venue}</div>
                                
                                <div className="subtitle is-size-6 has-text-grey">When: {when}
                                </div>
                                
                                {infoLink && (
                                    <div className="subtitle is-size-6 has-text-grey">
                                        <a href={infoLink} target="_blank" rel="external">Event details</a>
                                    </div>
                                )}

                                <footer className="card-footer">
                                    {spotify && (
                                        <p className="card-footer-item">
                                            <a href={spotify} target="_blank" rel="external" className="has-text-black">
                                                <FaSpotify />
                                            </a>
                                        </p>
                                    )}
                                    {youTube && (
                                        <p className="card-footer-item">
                                            <a href={youTube} target="_blank" rel="external" className="has-text-black">
                                                <FaYoutube />
                                            </a>
                                        </p>
                                    )}
                                    <p className="card-footer-item">
                                        <button className="button is-white" onClick={handleFavoriteClick}>
                                            <FaHeart color={isFavorite ? "red" : "grey"} />
                                        </button>
                                    </p>
                                </footer>
                            </div>
                            </div>

                        </div>
                    </div>
                
    
        
    )
}











