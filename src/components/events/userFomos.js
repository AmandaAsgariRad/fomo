import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSpotify, FaYoutube } from "react-icons/fa"
import "../fomo.css"

export const UserFomos = () => {
    const [fomos, setFomos] = useState([])

    const navigate = useNavigate()

    const localFomoUser = localStorage.getItem("fomo_user")
    const fomoUserObject = JSON.parse(localFomoUser)

    const fetchFomos = () => {
        return fetch(`http://localhost:8088/events?userId=${fomoUserObject.id}&_expand=genre`)
            .then((response) => response.json())
            .then((data) => {
                setFomos(data)
            })
    }
    useEffect(
        () => {
            if (fomoUserObject) {
                fetch(`http://localhost:8088/events?userId=${fomoUserObject.id}&_expand=genre`)
                    .then((response) => response.json())
                    .then((data) => {
                        setFomos(data)
                    })
            }
        },
        []
    )


    const handleDelete = (eventId) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            return fetch(`http://localhost:8088/events/${eventId}`, {
                method: "DELETE",
            })
                .then(() => {
                    fetchFomos()
                })
        }
    }


    return (
        <div className="allfomos-container">
            <div className="allfomos-header is-size-2 has-text-centered">
                <h2>Fomos Created</h2>
            </div>
            <article className="all_fomos">
                {fomos.map((fomoEvent) => (
                    <div key={`fomo--${fomoEvent.id}`} className="event-container">
                        <section className="event">
                            <div className="image">
                                <img src={fomoEvent.image} alt={fomoEvent.name} />
                            </div>
                            <div className="artistName">
                                <h2>{fomoEvent.name}</h2>
                            </div>
                            <div className="genre">
                                <h4>{fomoEvent?.genre?.type}</h4>
                            </div>
                            <div className="venue">
                                <h4>At {fomoEvent.venue}</h4>
                            </div>
                            <div className="when">
                                <h4>On {fomoEvent.when}</h4>
                            </div>
                            <div className="spotifyLink">
                                {fomoEvent.spotify && (
                                    <a href={fomoEvent.spotify} target="_blank" rel="external">
                                        <FaSpotify />
                                    </a>
                                )}
                            </div>
                            <div className="youTubeLink">
                                {fomoEvent.youTube && (
                                    <a href={fomoEvent.youTube} target="_blank" rel="external">
                                        <FaYoutube />
                                    </a>
                                )}
                            </div>
                            <div className="infoLink">
                                {fomoEvent.infoLink && (
                                    <a href={fomoEvent.infoLink} target="_blank" rel="external">
                                        <h4>Info Link</h4>
                                    </a>
                                )}
                            </div>


                            {fomoEvent.userId === fomoUserObject.id
                                ? <>
                                    <button
                                        className="button is-small"
                                        id="deleteBtn"
                                        onClick={() => handleDelete(fomoEvent.id)}
                                        type="delete"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="button is-small"
                                        id="editBtn"
                                    //    onClick={() => handleDelete(fomoEvent.id)}
                                    //    type="delete"
                                    >
                                        Edit
                                    </button>
                                </>
                                : <></>
                            }
                        </section>
                    </div>
                ))
                }
            </article >
        </div >
    )
}
