import { useEffect, useState } from "react"
import { Events } from "./events"
import { EventSearch } from "./eventSearch"

export const EventList = () => {
  const [fomoEvents, setEvents] = useState([])
  const [allEvents, setAllEvents] = useState([])
  

  useEffect(() => {
    fetch(`http://localhost:8088/events?&_expand=genre`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data)
        setAllEvents(data)
      })
  }, [])

  const handleResetClick = () => {
    setEvents(allEvents)
  }

return (
    <section className="events">
      <div className="title-container is-size-1 has-text-centered">
        <h2>Browse Events In Nashville</h2>
      </div>

      <EventSearch setEvents={setEvents} fomoEvents={fomoEvents} handleResetClick={handleResetClick} />
      <div className="columns is-multiline has-text-centered">
      {fomoEvents.length > 0 && fomoEvents.map((fomoEvent) => (
         <div className="column is-4">
        <Events
          key={`fomoEvent--${fomoEvent.id}`}
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
      </div>
      ))}
      </div>

    </section>
  )
}


