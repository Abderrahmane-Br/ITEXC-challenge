import Navitem from "./Navitem";

function Navbar() {
    return (
        <nav>
            <Navitem name="Dashboard" />
            <Navitem name="Patients list" />
            <Navitem name="Messages" />
            <Navitem name="Appointments" />
            <Navitem name="Medical history" />
        </nav>
    )
}
export default Navbar;