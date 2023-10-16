import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../../slices/patientsSlice";
import PatientCardMain from "./components/PatientCardMain";
import Searchbar from "../../generic-components/Searchbar";

//Icons 
import filterIcon from "../../assets/filter.svg";
import downloadIcon from "../../assets/download.svg";

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
                <Searchbar />
                <button className="patients__toolbar__button">
                    <img src={downloadIcon} />
                    <span>Download report</span>
                </button>
                <button className="patients__toolbar__button">
                    <img src={filterIcon} />
                    <span>Filter</span>
                </button>
            </div>
            <div className="patients__list">
                {patientsCards}
            </div>
        </section>
    )
}
export default Patients;