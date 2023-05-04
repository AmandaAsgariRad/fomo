export const UserFaves = ({favorites}) => {
    
    return (
    <section className="favoritesContainer">
        <div className="header_faves">
            <header>Favorites</header>
        </div>
        <div className="favoriteDisplay"><h3>If you click a favorite, it will show up here</h3></div>
        <div className="favoritesList">
            <ul>
                {favorites?.map((favorite) => (
                    <li key={favorite.id}>{favorite?.eventId}</li>
                ))}
            </ul>
        </div>
    </section>
    )
}