import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./events.css"

export const CreateEvent = () => {
    const localFomoUser = localStorage.getItem("fomo_user")
    const fomoUserObject = JSON.parse(localFomoUser)

    const [fomo, setEvent] = useState({
        name: "",
        userId: fomoUserObject ? fomoUserObject.id : "",
        genreId: 0,
        venue: "",
        when: "",
        image: "",
        infoLink: "",
        spotify: "",
        youTube: ""
    })

    const [musicGenres, setMusicGenres] = useState([])

    const navigate = useNavigate()

    const createNewEvent = (event) => {
        console.log(fomo)
        event.preventDefault()
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fomo)
        })
            .then(response => response.json())
            .then(() =>
                navigate("/userFomos")

            )
    }

    useEffect(
        () => {
            fetch(`http://localhost:8088/genres`)
                .then(response => response.json())
                .then((data) => {
                    setMusicGenres(data)
                })
        },
        []
    )

    const newEvent = (event) => {
        const copy = { ...fomo }
        if (event.target.id === 'when') {
            const date = new Date(event.target.value)
            copy['when'] = date.toLocaleDateString('en-US', {timeZone: 'UTC'})
        } 
        else {
        copy[event.target.id] = event.target.value
        }
        setEvent(copy)
    }
    return (
    <form onSubmit={(e) => createNewEvent(e)}>
        <div className="title-container">
        <div className="title is-size-1 has-text-centered" >
                <h1>Create A FOMO</h1>
                </div>
                </div> 
                <div className="box has-text-centered">
                <fieldset>
                    <label htmlFor="name">Artist Name: </label>
                    <input onChange={newEvent}
                        type="text"
                        id="name"
                        className="form-control"
                        required />
                </fieldset>
                <fieldset>
                <div className="genre-dropdown-container">
                    <label htmlFor="genre">Genre: </label>
                    <select id="genre" className="genreDropDowns"
                        onChange={(event) => {
                            const copy = { ...fomo }
                            copy.genreId = parseInt(event.target.value);
                            setEvent(copy)
                        }
                        }>
                        <option value="0">Pick a music genre</option>
                        {musicGenres.map(
                            (type) => {
                                return <option
                                    key={type.id}
                                    id={type.id}
                                    value={type.id}>
                                    {type.type}
                                </option>
                            }
                        )}
                    </select>
                </div>
                </fieldset>

                <fieldset>
                    <label htmlFor="venue">Venue: </label>
                    <input onChange={newEvent}
                        type="text"
                        id="venue"
                        className="form-control"
                        required />
                </fieldset>

                <fieldset>
                    <label htmlFor="when">When: </label>
                    <input onChange={newEvent}
                        type="date"
                        id="when"
                        className="form-control"
                        placeholder="required"
                        required />
                </fieldset>

                <fieldset>
                    <label htmlFor="image">Image: </label>
                    <input onChange={newEvent}
                        type="text"
                        id="image"
                        className="form-control"
                        placeholder="must be an image address URL"
                        title="Please enter a valid image URL (JPG, JPEG, PNG, or GIF)"
                        required />
                </fieldset>

                <fieldset>
                    <label htmlFor="infoLink">Info Link: </label>
                    <input onChange={newEvent}
                        type="url"
                        id="infoLink"
                        className="form-control"
                        placeholder="must be a URL"
                        required
                        pattern="https?://.+"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="spotify">Spotify URL: </label>
                    <input onChange={newEvent}
                        type="text"
                        id="spotify"
                        className="form-control"
                        placeholder="must be Spotify URL"
                        pattern="https:\/\/open\.spotify\.com\/artist\/[a-zA-Z0-9]+"
                        title="Please enter a valid Spotify artist URL"
                        required />
                </fieldset>
                
                <fieldset>
                    <label htmlFor="youTube">YouTube URL: </label>
                    <input onChange={newEvent}
                        type="text"
                        id="youTube"
                        className="form-control"
                        placeholder="must be a YouTube URL"
                        title="Please enter a valid YouTube video URL"
                        required />
                </fieldset>
                
                <div className="button-container has-margin-top">
                    <button className="button is-small" type="submit">Create FOMO</button>
                </div>
            </div>
            </form>

    )
}
