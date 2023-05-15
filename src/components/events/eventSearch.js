import { useEffect, useState } from "react"
import "./events.css"

export const EventSearch = ({setEvents, fomoEvents, handleResetClick}) => {
   
    const [selectedDate, setSelectedDate] = useState("")
    const [matchingEvent, setMatchingEvent] = useState(null)



    const handleDateChange = (event) => {
        setSelectedDate(event.target.value)
        setMatchingEvent(null)
      }


      const handleSearchButtonClick = () => {
        const dateChange = new Date(selectedDate).toLocaleDateString('en-US', {timeZone: 'UTC'})
        const matchingEvent = fomoEvents.filter((event) => event.when === dateChange)
        setEvents(matchingEvent)
        console.log(matchingEvent)
        console.log(fomoEvents)
        console.log(selectedDate)
        console.log(dateChange)
      }


return (
    <section>
        <div className="field-container">
    <div className="field is-grouped is-grouped-centered">
      <div className="control">
        <input className="input" type="date" id="date" value={selectedDate} onChange={handleDateChange} />
        </div>
        <div className="control">
            <button className="button is-default" id="searchBtn" onClick=
            {handleSearchButtonClick}>Search</button>
            </div>

            <div className="control">
            <button className="button is-default" id="resetBtn" onClick=
            {handleResetClick}>Reset Filter</button>
            </div>
        
        </div>
        {matchingEvent && (
            <div>
                <h2>{matchingEvent.name}</h2>
                <p>{matchingEvent?.genre?.type}</p>
                <p>{matchingEvent.venue}</p>
                <p>{matchingEvent.when}</p>

            </div>
        )}
        </div>
        </section>
)
}