import { Link } from "react-router-dom";

function PatientCardDetails({
    id,
    avatar,
    name,
    address,
    appointments,
    completed_appointments,

}) {
    console.log(address)
    return (
        <div className="patient__card --details">
            <img src={avatar} alt="patient avatar" />
            <span className="patient__card__name">{name}</span>
            <span className="patient__card__address">{address[1]}, {address[2]}</span>
            <div className="patient__card__appointments">
                <span>{appointments}</span>
                <span>{completed_appointments}</span>
                <span>Appointments</span>
                <span>Completed</span>
            </div>
            <Link className="patient__card__button --simple-button --dark" to={`/:${id}`}>Message patient</Link>
        </div>
    )
}
export default PatientCardDetails;