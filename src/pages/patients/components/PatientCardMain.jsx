import { Link } from "react-router-dom";
import PatientCardInfoRow from "../../patient/components/PatientCardInfoRow";

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
        <div className="patient__card --main" >
            <img src={avatar} alt="patient avatar" />
            <span className="patient__card__name">{name}</span>
            <span className="patient__card__address">{address[1]}, {address[2]}</span>
            <p></p>
            <PatientCardInfoRow name="Weight" value={`${weight}lbs`} />
            <PatientCardInfoRow name="Blood pressure" value={`${blood_pressure}mmHg`} />
            <PatientCardInfoRow name="Blood glucose" value={`${blood_glucose}mg/dl`} />
            <Link className="patient__card__button --simple-button --dark" to={`/:${id}`}>View patient details</Link>
        </div>
    )
}
export default PatientCardMain;