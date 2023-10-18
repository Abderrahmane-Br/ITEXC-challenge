import PatientCardInfoRow from "./PatientCardInfoRow";

function PatientInfoBlock({
    weight,
    height,
    blood_type,
    blood_pressure,
    blood_glucose,
    desease,
    allergies

}) {
    return (
        <div className="patient__info-block patient__card">
            <PatientCardInfoRow name="Weight" value={`${weight}lbs`} />
            <PatientCardInfoRow name="Height" value={`${height}m`} />
            <PatientCardInfoRow name="Blood type" value={blood_type} />
            <PatientCardInfoRow name="Blood glucose" value={`${blood_glucose}mg/dl`} />
            <PatientCardInfoRow name="Blood pressure" value={`${blood_pressure}mmHg`} />
            <PatientCardInfoRow name="Desease" value={desease.join(", ")} />
            <PatientCardInfoRow name="Allergies" value={allergies.join(", ")} />
        </div>
    )
}
export default PatientInfoBlock;