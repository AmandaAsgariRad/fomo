import { useEffect, useState } from "react"
import { Events } from "./events"
import { EventSearch } from "./eventSearch"

export const EventList = () => {
  const [fomoEvents, setEvents] = useState([])
  const [allEvents, setAllEvents] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [user, setUser] = useState({})


  useEffect(() => {
    const localFomoUser = localStorage.getItem("fomo_user")
    const fomoUserObject = JSON.parse(localFomoUser)
    
    fetch(`http://localhost:8088/users/${fomoUserObject.id}`)
        .then(response => response.json())
        .then((data) => {
            setUser(data)
        })
}, [])

  useEffect(() => {
    fetch(`http://localhost:8088/events?&_expand=genre`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data)
        setAllEvents(data)
      })
  }, [])
 
  useEffect(() => {
    fetch(`http://localhost:8088/events?&_expand=genre`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data)
        setAllEvents(data)
        setRefresh(false)
      })
  }, [refresh])

 


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
        <Events setRefresh={setRefresh} 
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


