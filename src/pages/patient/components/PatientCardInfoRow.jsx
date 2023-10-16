function PatientCardInfoRow({ name, value }) {
  return (
    <div className="patient__card__info-row"><span>{name}</span><span>{value}</span></div>
  )
}
export default PatientCardInfoRow;