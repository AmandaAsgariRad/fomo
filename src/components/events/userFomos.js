import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSpotify, FaYoutube } from "react-icons/fa"
import "./events.css"

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
        <div className="block">
            <div className="title-container is-size-1 has-text-centered">
                <h2>Fomos Created</h2>
            </div>
            <section>
                <div className="columns is-multiline has-text-centered">
                    {fomos.map((fomoEvent) => (
                        <div key={`fomo--${fomoEvent.id}`} className="column is-4">
                            <div className="card">
                                <div className="card-content has-padding">
                                    <div className="card-image">
                                        <section className="event">

                                            <div className="image">
                                                <figure className="image is-4by3">
                                                    <img src={fomoEvent.image} alt={fomoEvent.name} />
                                                </figure>
                                            </div>

                                            <div className="title-container has-margin-top has-text-centered">
                                                <h2 className="title is-size-4">{fomoEvent.name}</h2>
                                                <div className="title-underline"></div>
                                            </div>

                                            <div className="genre-container has-margin-top has-text-centered">
                                                <div className="subtitle is-size-6 has-text-grey">{fomoEvent?.genre?.type}
                                                </div>



                                                <div className="subtitle is-size-6 has-text-grey">
                                                    <span className="icon has-text-primary">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </span>
                                                    <span>{fomoEvent.venue}</span>
                                                </div>

                                                <div className="subtitle is-size-6 has-text-grey">
                                                    <h4>{fomoEvent.when}</h4>
                                                </div>

                                                {fomoEvent.infoLink && (
                                                    <div className="subtitle is-size-6 has-text-grey">
                                                        <a href={fomoEvent.infoLink} target="_blank" rel="external">Event Details
                                                        </a>
                                                    </div>
                                                )}

                                                <footer className="card-footer">
                                                    {fomoEvent.spotify && (
                                                        <p className="card-footer-item">
                                                            <a href={fomoEvent.spotify} target="_blank" rel="external" className="has-text-black">
                                                                <FaSpotify />
                                                            </a>
                                                        </p>
                                                    )}

                                                    {fomoEvent.youTube && (
                                                        <p className="card-footer-item">
                                                            <a href={fomoEvent.youTube} target="_blank" rel="external" className="has-text-black">
                                                                <FaYoutube />
                                                            </a>
                                                        </p>
                                                    )}


                                                </footer>
                                                {fomoEvent.userId === fomoUserObject.id
                                                    ? <>
                                                        <div className="delete-button-container has-margin-top">
                                                            <button
                                                                className="button is-small"
                                                                id="deleteBtn"
                                                                onClick={() => handleDelete(fomoEvent.id)}
                                                                type="delete"
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </>
                                                    : <></>
                                                }
                                            </div>
                                        </section>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}