import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import RaisedButton from 'material-ui/RaisedButton'
import RadioButton from 'material-ui/RadioButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Checkbox from 'material-ui/Checkbox'
import ContentMinus from 'material-ui/svg-icons/content/remove'
import addGuest from '../actions/guests/create-guest'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { showError } from '../actions/loading'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './RSVP.css'

const ATTENDING = [
  "Yes, I will be there",
  "Sorry, I cannot make it"
]

const TRANSPORT = [
  "Yes",
  "No, travelling by car"
]

class RSVP extends PureComponent {
  constructor(props) {
    super()

    const { firstName, lastName, email, attending, event1, event2, event3, transport, diet, songs, plusOnes, fullName, child, value, count } = props

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
      plusOnes: [],
      fullName,
      child,
      value,
      errors: {},
      count: [0]
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

  updatefullName(event) {
    this.setState({ fullName: this.refs.fullname.value})
  }

  handleChange = (event, index, value) =>  {
    this.setState({value})
    this.setState({child: value})
    this.addPlusOneToArray()
  }

  addPlusOneToArray() {
    const { plusOnes, fullName, child } = this.state
    let tempOne = {
      fullName,
      child
    }
    this.setState({plusOnes: plusOnes.concat(tempOne)})
  }

  add() {
    var newInput = this.state.count.length;
    this.setState({count: this.state.count.concat(newInput)},function(){
            return;
        })
  }

  remove(i) {
    this.setState({count: this.state.count.filter((c) => {
      if (c !== i) return c
    })})
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
      event1,
      event2,
      event3,
      transport,
      diet,
      songs,
      plusOnes
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
      plusOnes,
    }

    if (this.validate(guest)) {
      this.props.addGuest(guest)
    }
  }

  render() {
    const { errors, count } = this.state

    return (
      <div className="editor">
        <div className="rsvp-form">
          <h2 className="title">RSVP</h2>
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
            onChange={this.updateLastName.bind(this)} /><br /><br />

          { errors.lastName && <p className="error">{ errors.lastName }</p> }

          <input
            type="text"
            ref="email"
            className="email"
            placeholder="Email"
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

          <input
            type="text"
            ref="diet"
            className="diet"
            placeholder="Dietary requirements or needs"
            onChange={this.updateDiet.bind(this)} /><br /><br />

        <input
            type="text"
            ref="songs"
            className="songs"
            placeholder="Song recommendation(s)"
            onChange={this.updateSongs.bind(this)} /><br /><br />

        <p className="plus">Plus ones</p>
        <p className="sub">Subject to approval by bride and/or groom </p>

        {count.map((i) => {
          return (

          <div key={i} className="plusones">
            <FloatingActionButton mini={true} className="minus" onClick={this.remove.bind(this, i)}>
              <ContentMinus />
            </FloatingActionButton>

            <input
                type="text"
                ref="fullname"
                className="fullname"
                placeholder="Full Name"
                onChange={this.updatefullName.bind(this)} />

            <SelectField
                value="value"
                onChange={this.handleChange.bind(this)}
                floatingLabelText="Guest Type"
                autoWidth={false}
                id="dropdown"
                floatingLabelStyle={{color: 'darkGreen'}}
            >
                <MenuItem value={0} primaryText="Adult" />
                <MenuItem value={1} primaryText="Child" />
            </SelectField>
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
          <RaisedButton label="RSVP" className="RSVPbutton" primary={true} onClick={this.saveGuest.bind(this)} />
          <RaisedButton className="cancelbutton" label="Cancel" />
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = null

export default connect(mapStateToProps, { addGuest })(RSVP)
