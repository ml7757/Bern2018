import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Checkbox from 'material-ui/Checkbox'
import ContentMinus from 'material-ui/svg-icons/content/remove'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import editGuest from '../actions/guests/edit-guest'
import fetchGuests from '../actions/guests/fetch'
import removeGuest from '../actions/guests/remove-guest'
import AdminNavigation from './AdminNavigation'


const ATTENDING = [
  "Yes, I will be there",
  "Sorry, I cannot make it"
]

const TRANSPORT = [
  "Yes",
  "No, travelling by car"
]



class GuestItem extends PureComponent {
  constructor(props) {
    super()
    const guest = props.guest
    const { firstName, lastName, email, attending, event1, event2, event3, transport, diet, songs, plusOnes, fullName, child, value, count } = guest

    this.state = {
      firstName,
      lastName,
      email,
      attending,
      event1,
      event2,
      event3,
      transport,
      diet,
      songs,
      plusOnes,
      fullName,
      fnarray: [],
      child,
      carray: [],
      value,
      errors: {},
      count: []
    }
  }



  updateFirstName(event) {
    this.setState({
      firstName: this.refs.firstname.value
    })
  }


  updateLastName(event) {
    this.setState({
      lastName: this.refs.lastname.value
    })
  }

  updateEmail(event) {
    this.setState({
      email: this.refs.email.value
    })
  }

  setAttending(event) {
    this.setState({
      attending: event.target.value
    })
  }

  setEvent1(event, x) {
    this.setState({
      event1: x
    })
  }

  setEvent2(event, x) {
    this.setState({
      event2: x
    })
  }

  setEvent3(event, x) {
    this.setState({
      event3: x
    })
  }

  setTransport(event) {
    this.setState({
      transport: event.target.value
    })
  }

  updateDiet(event) {
    this.setState({
      diet: this.refs.diet.value
    })
  }

  updateSongs(event) {
    this.setState({
      songs: this.refs.songs.value
    })
  }

  updatefullName(i) {
    const {plusOnes} = this.state
    let fn = `fullname${i.toString()}`
    plusOnes[i].fullName = this.refs[fn].value
  }

  updateExtrafullName(i) {
    const {fnarray} = this.state
    let efn = `extrafullname${i.toString()}`
    fnarray[i] = this.refs[efn].value
  }

  handleChange(i, e) {
    const {carray} = this.state
    carray[i] = e.target.value
  }

  add() {
    var newInput = this.state.count.length;
    this.setState({count: this.state.count.concat(newInput)},function(){
            return;
        })
  }

  remove = (i) => {
    this.setState({count: this.state.count.filter(c => c !== i)})
  }

  validate(guest) {
    const { firstName, lastName } = guest

    let errors = {}

    if (!firstName || firstName === '') errors.firstName = "The first name can't be blank"
    if (!lastName || lastName === '') errors.lastName = "The last name can't be blank"

    this.setState({
      errors,
    })

    return Object.keys(errors).length === 0
  }

  editGuest() {
    const {
      firstName, lastName, email, attending, event1, event2, event3, transport, diet, songs, plusOnes, fnarray, carray, fullName, child,
    } = this.state

    const guest = {
      firstName,
      lastName,
      email,
      attending,
      event1,
      event2,
      event3,
      transport,
      diet,
      songs,
      fnarray,
      carray,
      plusOnes,
      fullName,
      child
    }


    this.props.editGuest(this.props.params.guestId, guest)

  }

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


  render() {

    const { errors, count } = this.state
    const guest = this.props.guest

      return (
        <div className="editguest" id="RSVP-section">
        <AdminNavigation />
          <div className="editguestform">
            <h2>Edit guest</h2>
            <input
              type="text"
              ref="firstname"
              className="firstname"
              placeholder={guest.firstName}
              onChange={this.updateFirstName.bind(this)} />

            { errors.firstName && <p className="error">{ errors.firstName }</p> }

            <input
              type="text"
              ref="lastname"
              className="lastname"
              placeholder={guest.lastName}
              onChange={this.updateLastName.bind(this)} /><br /><br />

            { errors.lastName && <p className="error">{ errors.lastName }</p> }

            <input
              type="text"
              ref="email"
              className="email"
              placeholder={guest.email}
              onChange={this.updateEmail.bind(this)} /><br /><br />

            <p className="attend">Will you attend?</p>
            {ATTENDING.map((att) => {
              return <label key={att} htmlFor={att}>
                <input id={att} type="radio" name="attending" value={att} onChange={this.setAttending.bind(this)} />
                {att}
              </label>
            })}<br /><br />

            <p className="eventsattending">What events will you be attending?</p>
            <Checkbox
              className="event1"
              label="Casual Meet & Greet (Apero)"
              onCheck={this.setEvent1.bind(this)}
            />
            <Checkbox
              label="Wedding Celebration"
              onCheck={this.setEvent2.bind(this)}
            />
            <Checkbox
              label="Farewell Get Together"
              onCheck={this.setEvent3.bind(this)}
            /><br />

            <p className="transport">Do you require transport to and from each event?</p>
            <p className="sub">Transport will be picking up from and dropping guests off at the Hotel Allegro in Bern</p>
            {TRANSPORT.map((trnsprt) => {
              return <label key={trnsprt} htmlFor={trnsprt}>
                <input id={trnsprt} type="radio" name="transport" value={trnsprt} onChange={this.setTransport.bind(this)} />
                {trnsprt}
              </label>
            })}<br /><br />

            <textarea
              type="text"
              ref="diet"
              className="diet"
              placeholder={guest.diet}
              onChange={this.updateDiet.bind(this)} /><br /><br />

          <input
              type="text"
              ref="songs"
              className="songs"
              placeholder={guest.songs}
              onChange={this.updateSongs.bind(this)} /><br /><br />

          <p>Plus ones: </p> {guest.plusOnes.map((p, i) => {
            return (
              <div key={i} className="plusones">
              <input
                  type="text"
                  ref={`fullname${i.toString()}`}
                  className="fullname"
                  placeholder={p.fullName}
                  onChange={() => this.updatefullName(i)} />
              </div>
            )
          })}

          {count.map((i) => {
            return (

            <div key={i} className="plusones">
              <FloatingActionButton mini={true} className="minus" onClick={this.remove.bind(this, i)}>
                <ContentMinus />
              </FloatingActionButton>

              <input
                   type="text"
                   ref={`extrafullname${i.toString()}`}
                   className="extrafullname"
                   placeholder=" Full Name"
                   onChange={() => this.updateExtrafullName(i)} />

               <select className="guest-type" defaultValue="1" onChange={this.handleChange.bind(this, i)}>
                 <option disabled="disabled" value="1" hidden="hidden">Guest Type</option>
                 <option value="false">Adult</option>
                 <option value="true">Child</option>
               </select>
            </div>
          )

        })}<br />
          <div className="addone">
            <FloatingActionButton mini={true} onClick={this.add.bind(this)}>
              <ContentAdd />
            </FloatingActionButton>
            <p className="add">Add plus one</p>
          </div><br /><br />

          <div className="actions">
            <RaisedButton label="Edit Guest" className="EditGuestbutton" primary={true} onClick={this.editGuest.bind(this)} />
          </div>
          </div>
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

          </div>
        </div>
      )

  }
}


const mapStateToProps = function(state, props) {
   return {guest: state.guests.find(function(guest){
     return guest._id === props.params.guestId
   })}
 }


export default connect(mapStateToProps, {fetchGuests, editGuest, removeGuest})(GuestItem)
