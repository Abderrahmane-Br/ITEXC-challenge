function Header(props) {
    console.log(props)
    return (
        <div className="calendar-profile">
            <span className="calendar-profile__pic"></span>
            <div className="calendar-profile__info">
                <p>John Doe</p>
                <p>Specialist</p>
            </div>
        </div>
    )
}
export default Header