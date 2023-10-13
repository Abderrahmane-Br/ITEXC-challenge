import { Link } from "react-router-dom";

function Navitem({
    name,
    // icon
}) {
    return (
        <Link>
            {/* <img src={icon} /> */}
            {name}
        </Link>
    )
}
export default Navitem;