import { useEffect, useState } from "react"

export const GenreFilter = ({onFilterChange}) => {
    const [selectedGenres, setSelectedGenres] = useState([])

    const handleCheckBoxChange = (event) => {
        const { value, checked } = event.target
        setSelectedGenres((prevSelectedGenre) => {
            if (checked) {
                return [...prevSelectedGenre, value]
        }
        else {
            return prevSelectedGenre.filter((genre) => genre !== value)
        }
        })
    }

    useEffect(() => {
        onFilterChange(selectedGenres)
    }, [selectedGenres])

    return (
        <div className="is-size-5 has-text-centered">
            <h4>Filter By Genre: </h4>
            <label>
                <input type="checkbox" value="1" onChange={handleCheckBoxChange} />
                Rock
            </label>
            
            <label>
            <input type="checkbox" value="2" onChange={handleCheckBoxChange} />
                Pop
            </label>

            <label>
            <input type="checkbox" value="3" onChange={handleCheckBoxChange} />
                Country
            </label>

            <label>
            <input type="checkbox" value="4" onChange={handleCheckBoxChange} />
                Alternative/Indie
            </label>

            <label>
            <input type="checkbox" value="5" onChange={handleCheckBoxChange} />
                HipHop/R&B
            </label>
            
            <label>
            <input type="checkbox" value="6" onChange={handleCheckBoxChange} />
                Other
            </label>
        </div>
    )
}