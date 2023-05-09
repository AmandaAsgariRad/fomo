import { FaSpotify, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"
import "../fomo.css"

export const Events = ({ userId, genreId, venue, when, image, name, spotify, youTube, infoLink }) => {

    const localFomoUser = localStorage.getItem("fomo_user")
    const fomoUserObject = JSON.parse(localFomoUser)
    
    
    return (
        <div className="event-container">
            <section className="event">
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <div className="artistName">
                    <h2>{name}</h2>
                </div>
                <div className="genre">
                    <h4>{genreId}</h4>
                </div>
                <div className="venue">
                    <h4>At {venue}</h4>
                </div>
                <div className="when">
                    <h4>On {when}</h4>
                </div>
                <div className="spotifyLink">
                    {spotify && (
                        <a href={spotify} target="_blank" rel="external">
                            <FaSpotify />
                        </a>
                    )}
                </div>
                <div className="youTubeLink">
                    {youTube && (
                        <a href={youTube} target="_blank" rel="external">
                            <FaYoutube />
                        </a>
                    )}
                </div>
                <div className="infoLink">
                    {infoLink && (
                        <a href={infoLink} target="_blank" rel="external">
                            <h4>Info Link</h4>
                        </a>
                    )}
                </div>

            </section>
        </div>

    )
}