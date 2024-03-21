import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: []}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()

    const {title, date, appointmentsList} = this.state
    const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
    const newAppointment = {
      id: uuidv4(),
      title,
      date: formattedDate,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
    }))
  }

  isToggleLike = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  render() {
    const {appointmentsList} = this.state
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">Add Appointment</h1>
          <div className="image-input-container">
            <form onSubmit={this.onAddAppointment}>
              <div>
                <p className="label">TITLE</p>
                <input
                  type="text"
                  placeholder="Title"
                  className="input-box"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div>
                <p className="label">DATE</p>
                <input
                  type="date"
                  placeholder="Title"
                  className="input-box"
                  onChange={this.onChangeDate}
                />
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          <div className="appointments-container">
            <h1 className="appointment-heading">Appointments</h1>
            <button type="button" className="starred-btn">
              Starred
            </button>
          </div>
          <ul className="list-items-container">
            {appointmentsList.map(eachAppointment => (
              <AppointmentItem
                appointmentDetails={eachAppointment}
                key={eachAppointment.id}
                isToggleLike={this.isToggleLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
