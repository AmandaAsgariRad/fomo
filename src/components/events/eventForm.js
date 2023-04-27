export const createEvent = () => {
    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleCreate}>
                <h1 className="create_profile">Create A Profile</h1>
                <fieldset>
                    <label htmlFor="fullName">Full Name</label>
                    <input onChange={updateUser}
                        type="text"
                        id="fullName"
                        className="form-control"
                        placeholder="required"
                        required autoFocus/>
                </fieldset>
                <fieldset>
                    <label htmlFor="address">Address</label>
                    <input onChange={updateUser}
                        type="text"
                        id="address"
                        className="form-control"
                        placeholder="required"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="city">City</label>
                    <input onChange={updateUser}
                        type="text"
                        id="city"
                        className="form-control"
                        placeholder="required"
                        required autoFocus />
                </fieldset>
                <fieldset>
                <label htmlFor="state">State</label>
                    <input onChange={updateUser}
                        type="text"
                        id="state"
                        className="form-control"
                        placeholder="required"
                        required autoFocus />
                </fieldset>
                <fieldset>
                <label htmlFor="zip">Zip</label>
                    <input onChange={updateUser}
                        type="text"
                        id="zip"
                        className="form-control"
                        placeholder="required"
                        required
                        pattern="[0-9]{5}" />
                </fieldset>
                <fieldset>
                <label htmlFor="email">Email for Login</label>
                    <input onChange={updateUser}
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="required"
                        required autoFocus />
                </fieldset>
                <fieldset>
                        <button type="submit">Create Profile</button>
                    </fieldset>
            </form>
    
        </main>
    )
}