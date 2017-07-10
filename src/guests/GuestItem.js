import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import RaisedButton from 'material-ui/RaisedButton'
import FaEdit from 'react-icons/lib/fa/edit'
import FaClose from 'react-icons/lib/fa/close'
import editGuest from '../actions/guests/edit-guest'
import fetchGuests from '../actions/guests/fetch'
import removeGuest from '../actions/guests/remove-guest'
import { showError } from '../actions/loading'

class GuestItem extends PureComponent {

  componentWillMount() {
    this.props.fetchGuests()
    const {guests} = this.props
  }

  renderPlusOnes(plusone, index) {
    return (
      <div key={index} className="plusone">
        <p>Full name: {plusone.fullName}</p>
        <p>Child?: {plusone.child.toString()}</p>
      </div>
    )
  }

  byeGuest() {
    this.props.removeGuest(this.props.params.guestId)
  }

  changeGuest() {
    this.props.editGuest(this.props.params.guestId)
  }


  render() {

    const guest = this.props.guests.find((guest) => (guest._id === this.props.params.guestId))

    return (
      <div>
        <p>First name: {guest.firstName}</p>
        <p>Last name: {guest.lastName}</p>
        <p>Email: {guest.email}</p>
        <p>Attending: {guest.attending.toString()}</p>
        <p>Attending Meet & Greet: {guest.event1.toString()}</p>
        <p>Attending Wedding Ceremony: {guest.event2.toString()}</p>
        <p>Attending Farewell Get Together: {guest.event3.toString()}</p>
        <p>Transport needed: {guest.transport.toString()}</p>
        <p>Dietary requirements: {guest.diet}</p>
        <p>Song recommendation(s): {guest.songs}</p>
        <p>Plus ones: {guest.plusOnes.map(this.renderPlusOnes.bind(this))}</p>

        <RaisedButton primary={true} onClick={ this.byeGuest.bind(this) } icon={<DeleteIcon/>} />

        <RaisedButton primary={true} onClick={ this.changeGuest.bind(this) } icon={<FaEdit/>} />

      </div>

    )
  }
}


const mapStateToProps = ({ guests }) => ({ guests })


export default connect(mapStateToProps, {fetchGuests, removeGuest, editGuest})(GuestItem)
