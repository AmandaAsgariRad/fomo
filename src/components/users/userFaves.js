export const UserFaves = () => {
    
    return <section className="favoritesContainer">
        <div className="favoriteDisplay"><h3>If you click a favorite, it will show up here</h3></div>
        <div className="favoritesList">
            <h2>Favorites</h2>
            <ul>
                {favorites.map(favorite => (
                    <li key={favorite.id}>{favorite.eventId}</li>
                ))}
            </ul>
        </div>
    </section>
}