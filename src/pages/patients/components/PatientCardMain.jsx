import { Link } from "react-router-dom";

function PatientCardMain({
    id,
    avatar,
    name,
    weight,
    address,
    blood_pressure,
    blood_glucose
}) {
    return (
        <Link className="patient__card --main" to={`/:${id}`}>
            <img src={avatar} alt="patient avatar" />
            <span className="patient__card__name">{name}</span>
            <span className="patient__card__address">{address}</span>
            <br />
            <div><span>Weight</span><span>{weight + 100}lbs</span></div>
            <div><span>Blood Pressure</span><span>{blood_pressure}mmHg</span></div>
            <div><span>Blood Glucose</span><span>{blood_glucose}mg/dl</span></div>
        </Link>
    )
}
export default PatientCardMain;