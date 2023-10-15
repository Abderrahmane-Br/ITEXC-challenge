import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../../slices/patientsSlice";
import PatientCardMain from "./components/PatientCardMain";

function Patients() {
    const [id, setId] = useState(0);
    const dispatch = useDispatch();
    const patients = useSelector(state => state.patients.list);

    const patientsCards = patients.map(item => (
        <PatientCardMain key={item.id} {...item} />
    ))

    useEffect(() => { dispatch(fetchPatients()) }, [])

    return (
        <section className="patients">
            <h1 className="patients__header">Patients list</h1>
            <div className="patients__toolbar">

            </div>
            <div>
                {patientsCards}
            </div>
        </section>
    )
}
export default Patients;