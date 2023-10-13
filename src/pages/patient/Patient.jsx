import { useParams } from "react-router-dom";


function Patient() {
    const { patientID } = useParams()
    return (
        <div>Here patient {patientID}</div>
    )
}
export default Patient;