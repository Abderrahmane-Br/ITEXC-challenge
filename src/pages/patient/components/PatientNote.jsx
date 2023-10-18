import { formatDate } from "../../../utils";
import BulletPointIcon from "../../../assets/date-bullet-point.svg";

function PatientNote({
    date,
    title,
    body,
    treatment
}) {
    console.log(date, body)
    return (
        <div className="note">
            <img src={BulletPointIcon} alt="" className="note__bullet-point" />
            <span className="note__date">{formatDate(date)}</span>
            <div className="note__card">
                <span className="note__card__title">{title}</span>
                <span className="note__card__body">{body}</span>
                <p></p>
                <div className="note__card__footer">
                    <span className="title">Treatemnt</span>
                    <span className="title">Duration</span>
                    <span className="title">Document</span>
                    <span>{treatment}</span>
                    <span>2 Months</span>
                    <a href="" onClick={(e) => { e.preventDefault() }}>document.pdf</a>
                </div>
            </div>
        </div>
    )
}
export default PatientNote