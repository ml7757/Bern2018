import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
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

    const { firstName, lastName, email, attending, event1, event2, event3, transport, diet, songs, fullName, child, count } = props

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
      fullName: [],
      child: [],
      errors: {},
      count: [0]
    }
  }

  getInitialState() {
       return {count:[0]};
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

  updatefullName(i, event) {
    let fullName = this.state.fullName.slice();
    fullName[i] = this.refs.fullname.value
    this.setState({fullName})
  }

  handleChange = (event, index, i, value) =>  {
    let child = this.state.child.slice()
    child[i] = event.target.value
    this.setState({child});
  }

  add() {
    var newInput = this.state.count.length;
    this.setState({count: this.state.count.concat(newInput)},function(){
            return;
        })
  }

  remove(i) {
    this.setState({count: this.state.count.filter((e)}, => {
      if (e !== i) return e
    }))
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
      plusOnes,
      fullName,
      value
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
      fullName,
      value
    }

    if (this.validate(guest)) {
      this.props.addGuest(guest)
    }
  }

  render() {
    const { errors, count } = this.state

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

          <p>Will you attend?</p>
        {ATTENDING.map((att) => {
            return <label key={att} htmlFor={att}>
              <input id={att} type="radio" name="attending" value={att} onChange={this.setAttending.bind(this)} />
              {att}
            <br /></label>
          })}<br />

          <p>What events will you be attending?</p>
          <Checkbox
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
          />

          <p>Do you require transport to and from each event?</p>
          <p>Transport will be picking up from and dropping guests off at the Hotel Allegro in Bern</p>
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

        <p>Plus ones</p>
        <p>Subject to approval by bride and/or groom </p>

        <FloatingActionButton mini={true} onClick={this.add.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>

        {count.map((i) => {
          return (

          <div key={i}>
            <input
                type="text"
                ref="fullname"
                className="fullname"
                placeholder="Full Name"
                onChange={this.updatefullName.bind(this, i)} />

            <SelectField
                value={this.state.child}
                onChange={this.handleChange.bind(this, i)}
                floatingLabelText="Guest Type"
                floatingLabelStyle={{color: 'darkGreen'}}
            >
                <MenuItem value={1} primaryText="Adult" />
                <MenuItem value={2} primaryText="Child" />
            </SelectField>

            <FloatingActionButton mini={true} onClick={this.remove.bind(this, i)}>
              <ContentMinus />
            </FloatingActionButton>
          </div>
        )

        })}

        <div className="actions">
          <button className="primary" onClick={this.saveGuest.bind(this)}>RSVP</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = null

export default connect(mapStateToProps, { addGuest })(RSVP)
