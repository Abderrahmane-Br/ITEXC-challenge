import { useState } from "react";
import { Link } from "react-router-dom";

function Patients() {
    const [id, setId] = useState(0);

    return (
        <>
            <Link to={`/:${id}`} onClick={() => { setId(id => id + 1) }}>Patient</Link>
            <Link to={`/:${id}`} onClick={() => { setId(id => id + 1) }}>Patient</Link>
            <Link to={`/:${id}`} onClick={() => { setId(id => id + 1) }}>Patient</Link>

        </>
    )
}
export default Patients;