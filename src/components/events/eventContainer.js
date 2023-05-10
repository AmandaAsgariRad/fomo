// import { useEffect, useState } from "react"
// import { FaHeart, FaSpotify, FaYoutube } from "react-icons/fa"
// import { Link } from "react-router-dom"
// import "../fomo.css"

// export const Events = ({ id, userId, genreId, venue, when, image, name, spotify, youTube, infoLink }) => {

//     const [isFavorite, setIsFavorite] = useState(false)
//     const [allFaves, setAllFaves] = useState([])
//     const [faveEvent, setFaveEvent] = useState({
//         userId: 0,
//         eventId: 0
//     })


//     useEffect(() => {
//     const localFomoUser = localStorage.getItem("fomo_user")
//     const fomoUserObject = JSON.parse(localFomoUser)

//     fetch(`http://localhost:8088/favorites?userId=${fomoUserObject.id}`)
//     .then((res) => res.json())
//     .then((res) => {
//             setAllFaves(res)
//     })
// }, [])


//     const handleFavoriteClick = (event) => {
//         event.preventDefault()
//         // setIsFavorite(!isFavorite)

//         const localFomoUser = localStorage.getItem("fomo_user")
//         const fomoUserObject = JSON.parse(localFomoUser)

//         if (isFavorite) {
//             fetch(`http://localhost:8088/favorites?userId=${fomoUserObject.id}&eventId=${id}`, {
//                 method: "DELETE"
//             })
//                 .then(setIsFavorite(false))
//         }
//         else {

//             const copy = {
//                 userId: fomoUserObject.id,
//                 eventId: event.id
//             }
        
//         for (let fave of allFaves) {
//             if (fave.userId !== copy.userId && fave.eventId !== copy.eventId ) {

//             }
//         }
//         fetch(`http://localhost:8088/favorites`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(favoriteData)
//         })
//             .then((response) => response.json())
//             .then(() => {
//                 setIsFavorite(true)
//             })
//     }
//     console.log("handleFavoriteClick called")
// }


//     return (
//         <div className="block">
//             <div className="card">
//                 <div className="card-content has-text-centered">
//                     <div className="image">
//                         <img src={image} alt={name} />
//                     </div>
//                     <div className="artistName">
//                         <h2 className="title">{name}</h2>
//                     </div>
//                     <div className="genre">
//                         <h4>{genreId}</h4>
//                     </div>
//                     <div className="venue">
//                         <h4>At {venue}</h4>
//                     </div>
//                     <div className="when">
//                         <h4>On {when}</h4>
//                     </div>
//                     <div className="infoLink">
//                         {infoLink && (
//                             <a href={infoLink} target="_blank" rel="external">
//                                 <h4>Info Link</h4>
//                             </a>
//                         )}
//                     </div>

//                     <footer className="card-footer">
//                         <p className="card-footer-item">
//                             <span>
//                                 {spotify && (
//                                     <a href={spotify} target="_blank" rel="external">
//                                         <FaSpotify />
//                                     </a>
//                                 )}
//                             </span>
//                         </p>
//                         <p className="card-footer-item">
//                             <span>
//                                 {youTube && (
//                                     <a href={youTube} target="_blank" rel="external">
//                                         <FaYoutube />
//                                     </a>
//                                 )}
//                             </span>
//                         </p>
//                         <p className="card-footer-item">
//                             <span>
//                                 <button className="button is-white" onClick={(e) => {
//                                     handleFavoriteClick(e)}}>
//                                     <FaHeart color={isFavorite ? "red" : "grey"} />
//                                 </button>
//                             </span>
//                         </p>
//                     </footer>

//                 </div>
//             </div>
//         </div>

//     )
// }

// // fetch(`http://localhost:8088/favorites?userId=${fomoUserObject.id}&eventId=${id}`)
// //     .then ((response) => response.json())
// //     .then((data) => {
// //         if (data.length > 0) {
// //             setIsFavorite(true)
// //         }
// //     })