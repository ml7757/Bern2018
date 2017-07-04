import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentMinus from 'material-ui/svg-icons/content/remove'
import addGuest from '../actions/guests/create-guest'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import { showError } from '../actions/loading'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './RSVP.css'

const ATTENDING = [
  "Yes",
  "No"
]

const TRANSPORT = [
  "Yes",
  "No"
]

const EVENTS = [
  "Event 1",
  "Event 2",
  "Event 3"
]

class RSVP extends PureComponent {
  constructor(props) {
    super()

    const { firstName, lastName, email, attending, eventsAttending, transport, diet, songs, fullName } = props

    this.state = {
      firstName,
      lastName,
      email,
      attending,
      eventsAttending,
      transport,
      diet,
      songs,
      fullName,
      value: 1,
      errors: {},
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

  setEventsAttending(event) {
    this.setState({
      eventsAttending: event.target.value
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

  updatefullName(event) {
    this.setState({
      fullName: this.refs.fullname.value
    })
  }

  handleChange = (event, index, value) => this.setState({value});

  show() {
    if(document.getElementById('benefits').className==='hiddendiv') {
      document.getElementById('benefits').className='visiblediv';
    }
    return false;
  }
  hide() {
    if(document.getElementById('benefits').className==='visiblediv') {
        document.getElementById('benefits').className='hiddendiv';
    }
    return false;
  }

  validate(guest) {
    const { firstName, lastName } = guest

    let errors = {}

    if (!firstName || firstName === '') errors.firstName = "Please add your first name"
    if (!lastName || lastName === '') errors.lastName = 'Please add your last name'

    this.setState({
      errors,
    })

    return Object.keys(errors).length === 0
  }

  saveGuest() {
    const {
      firstName,
      lastName,
      email,
      attending,
      eventsAttending,
      transport,
      diet,
      songs,
      fullName,
      value
    } = this.state

    const guest = {
      firstName,
      lastName,
      email,
      attending,
      eventsAttending,
      transport,
      diet,
      songs,
      fullName,
      value
    }

    if (this.validate(guest)) {
      this.props.addGuest(guest)
    }
  }

  render() {
    const { errors } = this.state

    return (
      <div className="editor">
        <input
          type="text"
          ref="firstname"
          className="firstname"
          placeholder="First Name"
          onChange={this.updateFirstName.bind(this)} />

        { errors.firstName && <p className="error">{ errors.firstName }</p> }

        <input
            type="text"
            ref="lastname"
            className="lastname"
            placeholder="Last Name"
            onChange={this.updateLastName.bind(this)} />

          { errors.lastName && <p className="error">{ errors.lastName }</p> }

        <input
            type="text"
            ref="email"
            className="email"
            placeholder="Email"
            onChange={this.updateEmail.bind(this)} />

          <p>Are you attending?</p>
        {ATTENDING.map((att) => {
            return <label key={att} htmlFor={att}>
              <input id={att} type="radio" name="attending" value={att} onChange={this.setAttending.bind(this)} />
              {att}
            </label>
          })}<br />

          <p>What events are you attending?</p>
        {EVENTS.map((events) => {
            return <label key={events} htmlFor={events}>
              <input id={events} type="checkbox" name="attending" value={events} onChange={this.setEventsAttending.bind(this)} />
              {events}
            </label>
          })}<br />

          <p>Do you require transport to and from each event?</p>
        {TRANSPORT.map((trnsprt) => {
            return <label key={trnsprt} htmlFor={trnsprt}>
              <input id={trnsprt} type="radio" name="transport" value={trnsprt} onChange={this.setTransport.bind(this)} />
              {trnsprt}
            </label>
          })}<br />

        <input
            type="text"
            ref="diet"
            className="diet"
            placeholder="Dietary requirements or needs"
            onChange={this.updateDiet.bind(this)} />

        <input
            type="text"
            ref="songs"
            className="songs"
            placeholder="Song recommendations"
            onChange={this.updateSongs.bind(this)} />

        <h3>Plus ones</h3>

        <FloatingActionButton mini={true} onClick={this.show}>
          <ContentAdd />
        </FloatingActionButton>

        <div id="benefits" className="hiddendiv">
          <input
              type="text"
              ref="fullname"
              open={this.state.open}
              className="fullname"
              placeholder="Full Name"
              onChange={this.updatefullName.bind(this)} />

          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Adult" />
            <MenuItem value={2} primaryText="Child" />
          </DropDownMenu>

          <FloatingActionButton mini={true} onClick={this.hide}>
            <ContentMinus />
          </FloatingActionButton>
        </div>

        <div className="actions">
          <button className="primary" onClick={this.saveGuest.bind(this)}>Send</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = null

export default connect(mapStateToProps, { addGuest })(RSVP)
