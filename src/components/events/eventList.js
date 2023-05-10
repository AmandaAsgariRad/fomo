import { useEffect, useState } from "react"
import { Events } from "./events"
import { GenreFilter } from "./genreFilter"

export const EventList = () => {
  const [fomoEvents, setEvents] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8088/events?&_expand=genre`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data)
      })
  }, [])

  const handleFilterChange = (selectedGenres) => {
    setSelectedGenres(selectedGenres)
  }

  const filteredEvents =
    selectedGenres.length === 0
      ? fomoEvents
      : fomoEvents.filter((event) =>
          selectedGenres.includes(event?.genre?.type)
        )

  return (
    <section className="events">
      <div className="title is-size-2 has-text-centered mb-6">
        <h2>Browse Events</h2>
      </div>
      <GenreFilter onFilterChange={handleFilterChange} />
      {filteredEvents.map((fomoEvent) => (
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
      ))}
    </section>
  )
}


// import { useEffect, useState } from "react"
// import { Events } from "./events"
// import { GenreFilter } from "./genreFilter"

// export const EventList = () => {
//     const [fomoEvents, setEvents] = useState([])
//     const [selectedGenres, setSelectedGenres] = useState([])

//     useEffect(
//         () => {
//             fetch(`http://localhost:8088/events?&_expand=genre`)
//                 .then(response => response.json())
//                 .then((data) => {
//                     setEvents(data)
//                 })
//         },
//         []
//     )

//     const handleFilterChange = (selectedGenres) => {
//         setSelectedGenres(selectedGenres)
//     }

//     const filteredEvents = 
//         selectedGenres.length === 0 
//         ? fomoEvents : fomoEvents.filter((event) => selectedGenres.includes(event?.genre?.type))

//     return <section className="events">
//         <div className="title is-size-2 has-text-centered mb-6">
//             <h2>Browse Events</h2>
//         </div>
//         <GenreFilter onFilterChange={handleFilterChange} />
//         {filteredEvents.map((fomoEvent) => (
//             <Events key={`fomoEvent--${fomoEvent.id}`}
//                 userId={fomoEvent.userId}
//                 name={fomoEvent.name}
//                 id={fomoEvent.id}
//                 venue={fomoEvent.venue}
//                 when={fomoEvent.when}
//                 image={fomoEvent.image}
//                 genreId={fomoEvent?.genre?.type}
//                 spotify={fomoEvent.spotify}
//                 youTube={fomoEvent.youTube}
//                 infoLink={fomoEvent.infoLink}
//             />
//         ))}
//     </section>
    
// }

