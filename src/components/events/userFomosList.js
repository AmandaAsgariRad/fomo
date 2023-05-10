import { useEffect, useState } from "react"
import { Events } from "./events"
import { UserFomos } from "./userFomos"

export const EventList = () => {
    const [fomoEvents, setEvents]= useState([])

    useEffect (
        () => {
            fetch(`http://localhost:8088/events?&_expand=genre`)
            .then(response => response.json())
            .then((data) => {
                setEvents(data)
            })
        },
        []
    )
    
    return <section className="events">
        <div className="title is-size-2 has-text-centered mb-6">
            <h2>Browse Events</h2>
        </div>
    {
        fomoEvents.map((fomoEvent) => <UserFomos key={`fomoEvent--${fomoEvent.id}`}
        userId={fomoEvent.userId}
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
    )}
    </section>
    
}
