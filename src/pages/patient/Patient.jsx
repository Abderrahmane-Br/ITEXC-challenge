import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PatientCardDetails from "./components/PatientCardDetails";
import PatientInfoBlock from "./components/PatientInfoBlock";
import PatientNote from "./components/PatientNote";

function Patient() {
    const { patientID } = useParams();
    const patient = useSelector(state => state.patients.list.find(patient => patient.id === patientID.slice(1)));
    const notes = patient.appointments_notes.map((note, index) => <PatientNote key={index} {...note} />);
    return (
        <div className="patient">
            <h1>Patient info</h1>
            <section className="patient__content">
                <div className="patient__info">
                    <PatientCardDetails {...patient} />
                    <PatientInfoBlock {...patient} />
                </div>
                <div className="patient__notes">
                    <h2>Past appintments notes </h2>
                    <div className="notes">
                        {notes}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Patient;