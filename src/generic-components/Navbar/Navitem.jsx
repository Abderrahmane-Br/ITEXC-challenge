import { Link } from "react-router-dom";

function Navitem({
    name,
    // icon
}) {
    return (
        <Link to={name.toLowerCase().replace(" ", "-")}>
            {/* <img src={icon} /> */}
            {name}
        </Link>
    )
}
export default Navitem;