import { useEffect, useState } from "react"
import "./users.css"

export const UserFaves = () => {
    const [favorites, setFavorites] = useState([])
    const [user, updateUser] = useState({})
    const [userFaves, setUserFaves] = useState([])

    const localFomoUser = localStorage.getItem("fomo_user")
    const fomoUserObject = JSON.parse(localFomoUser)

    useEffect(() => {
        fetch(`http://localhost:8088/favorites?&_expand=event`)
            .then(response => response.json())
            .then((data) => {
                setFavorites(data)
            })
    })

    useEffect(() => {
        fetch(`http://localhost:8088/users/${fomoUserObject.id}`)
            .then(response => response.json())
            .then((data) => {
                updateUser(data)
            })
    }, [])

    useEffect(() => {
        const userFavorites = favorites.filter((favorite) => favorite.userId === user.id)
        setUserFaves(userFavorites)
    }, [favorites])

  //   const handleRemove = (favoriteId) => {
  //     if (window.confirm('Are you sure you want to delete this favorite?')) {
  //         return fetch(`http://localhost:8088/favorites/${favoriteId}`, {
  //             method: "DELETE",
  //         })
  //             .then(() => {
  //                 fetchFomos()
  //             })
  //     }
  // }


    return <div className="block">
    <div className="is-size-2 has-text-centered">
      <h2>Favorites</h2>
    </div>
    <section>
      <div className="card-content has-text-centered">
        {userFaves.length > 0 ? (
          <div className="columns is-multiline">
            {userFaves.map((userFavorite) => (
              <div key={`${userFavorite.id}`} className="column is-multiline is-4">
                <div className="card">
                <figure className="image is-4by3">
                    <img src={userFavorite?.event?.image} alt="image"/>
                  </figure>
                  <div className="card-content has-padding">
                    <section className="event">
                      
                      <div className="artistName">
                        <h2>{userFavorite?.event?.name}</h2>
                      </div>
                      
                      <div className="genre">
                        <h4>{userFavorite?.event?.genre?.type}</h4>
                      </div>
                     
                      <div className="venue">
                        <h4>At {userFavorite?.event?.venue}</h4>
                      </div>
                      
                      <div className="when">
                        <h4>On {userFavorite?.event?.when}</h4>
                      </div>
                      
                      <div className="infoLink">
                        {userFavorite.infoLink && (
                          <a href={userFavorite?.event?.infoLink} target="_blank" rel="external">
                            <h4>Event Info</h4>
                          </a>
                        )}
                      </div>
                      <div className="delete-button-container">
                      <button class="button is-small" id="deleteBtn">Remove</button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3>You have no favorites</h3>
        )}
      </div>
    </section>
  </div>
}

// onClick={() => handleRemove(userFavorite.id)}







 