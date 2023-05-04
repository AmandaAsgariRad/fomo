

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../fomo.css"
import { Events } from "./events"

export const UserFomos = () => {
    const [fomos, setFomos] = useState([])

    const navigate = useNavigate()

    useEffect(
        () => {
            const localFomoUser = localStorage.getItem("fomo_user")
            const fomoUserObject = JSON.parse(localFomoUser)
            if (fomoUserObject) {
                fetch(`http://localhost:8088/fomoEvents?userId=${fomoUserObject.id}&_expand=genre`)
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
            return fetch(`http://localhost:8088/fomoEvents/${eventId}`, {
                method: "DELETE",
            })
                .then(() => {
                    navigate(`/userFomos`)
                })
        }
    }


        return (
            <div className="allfomos-container">
                <div className="allfomos-header">
                    <h2>Fomos Created</h2>
                </div>
                <article className="all_fomos">
                    {fomos.map((fomoEvent) => (
                        <div key={fomoEvent.id}>
                            <Events
                                name={fomoEvent.name}
                                id={fomoEvent.id}
                                venue={fomoEvent.venue}
                                when={fomoEvent.when}
                                image={fomoEvent.image}
                                genreId={fomoEvent?.genre?.type}
                                spotify={fomoEvent.spotify}
                                youTube={fomoEvent.youTube}
                                infoLink={fomoEvent.infoLink}
                            />
                            <button 
                        className="btn-deleteFomo"
                        id="deleteBtn"
                        onClick={() => handleDelete(fomoEvent.id)}
                        type="delete"
                    >
                        Delete
                    </button>
                        </div>
                    ))}
                </article>
            </div>
        )
    }
