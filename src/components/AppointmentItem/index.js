import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, isToggleLike} = props
  const {title, date, isStarred, id} = appointmentDetails

  const onClickStar = () => {
    isToggleLike(id)
  }

  const imageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="each-appointment-container">
      <div className="title-date-start-container">
        <div>
          <h1 className="title">{title}</h1>
          <p className="date">Date: {date}</p>
        </div>
        <button type="button" className="btn" onClick={onClickStar}>
          <img src={imageUrl} alt="star" className="icon" />
        </button>
      </div>
    </li>
  )
}
export default AppointmentItem
