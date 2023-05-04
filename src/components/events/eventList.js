import { useEffect, useState } from "react"
import { Event, Events } from "./events"

export const EventList = () => {
    const [fomoEvents, setEvents]= useState([])

    useEffect (
        () => {
            fetch(`http://localhost:8088/fomoEvents?&_expand=genre`)
            .then(response => response.json())
            .then((data) => {
                setEvents(data)
            })
        },
        []
    )
    
    return <section className="events">
        <div className="header_events">
            <h2>Browse Events</h2>
        </div>
    {
        fomoEvents.map((fomoEvent) => <Events key={`fomoEvent--${fomoEvent.id}`}
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

