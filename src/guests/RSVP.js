import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Checkbox from 'material-ui/Checkbox'
import ContentMinus from 'material-ui/svg-icons/content/remove'
import addGuest from '../actions/guests/create-guest'
import gopfried from '../assets/imgs/gopfriedstutz.png'
import './RSVP.css'

const ATTENDING = [
  "Yes, I will be there",
  "Sorry, I cannot make it"
]

const TRANSPORT = [
  "Yes",
  "No, travelling by car"
]


const RSVPDate = new Date("January 31, 2018 23:59:59");
const rightNow = new Date();


class RSVP extends PureComponent {
  constructor(props) {
    super()

    const { firstName, lastName, email, attending, event1, event2, event3, transport, diet, songs, fullName, child, value } = props

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
      fnarray: [],
      child,
      carray: [],
      value,
      errors: {},
      count: [0],
      open: false
    }
  }


  handleOpen = () => {
   this.setState({open: true})
  }

  handleClose = () => {
   this.setState({open: false})
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
    const {fnarray} = this.state
    let fn = `fullname${i.toString()}`
    fnarray[i] = this.refs[fn].value
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

  addPlusOneToArray() {
    const { plusOnes, fullName, child } = this.state
    let tempOne = {
      fullName,
      child
    }
    this.setState({plusOnes: plusOnes.concat(tempOne)})
  }

  remove(i) {
    this.setState({count: this.state.count.filter(c => c !== i)})
  }

  validate(guest) {
    const { firstName, lastName, email, attending } = guest

    let errors = {}

    if (!firstName || firstName === '') errors.firstName = "Please add your first name"
    if (!lastName || lastName === '') errors.lastName = 'Please add your last name'
    if (!email || email === '') errors.email = 'Please add your email address'
    if (!attending || attending === '') errors.attending = 'Please select whether you will attend the wedding'

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
      fnarray,
      carray,
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
      fnarray,
      carray,
    }

    if (this.validate(guest)) {
      this.props.addGuest(guest)
    }
    var form = document.getElementById("rsvp-form");
    form.reset();
  }

  cancelForm() {
    var form = document.getElementById("rsvp-form");
    form.reset();
  }

  render() {
    const { errors, count } = this.state
    const actions = [
     <RaisedButton
       label="Close"
       primary={true}
       onTouchTap={this.handleClose}
     />
   ]

    if (rightNow < RSVPDate) {

      return (
        <div className="rsvpeditor" id="RSVP-section">
          <form className="rsvpform" id="rsvp-form">
            <h2 className="titlersvp">RSVP</h2>
            <div className="rsvp-by">Please RSVP by 31 Jan 2018</div>
            <div className="block">
              <input
                type="text"
                ref="firstname"
                className="firstname"
                placeholder="First Name"
                onChange={this.updateFirstName.bind(this)} />

              { errors.firstName && <p className="error">{ errors.firstName }</p> }
            </div>

            <div className="block right">
              <input
                type="text"
                ref="lastname"
                className="lastname"
                placeholder="Last Name"
                onChange={this.updateLastName.bind(this)} />

              { errors.lastName && <p className="error">{ errors.lastName }</p> }
            </div>
            <div className="email-block">
              <input
                type="text"
                ref="email"
                className="email"
                placeholder="Email"
                onChange={this.updateEmail.bind(this)} />

              { errors.email && <p className="error">{ errors.email }</p> }
            </div>

            <div className="attendradio"><p className="attend">Will you attend?</p>
            {ATTENDING.map((att) => {
              return <label className="labelradio" key={att} htmlFor={att}>
                <input id={att} type="radio" name="attending" value={att} onChange={this.setAttending.bind(this)} />
                {att}
              </label>
            })}

            { errors.attending && <p className="error">{ errors.attending }</p> }<br /></div>

          <p className="eventsattending">What events will you be attending?</p>
          <Checkbox
            disabled={this.state.attending === "Sorry, I cannot make it"}
            className="event1"
            label="Meet & Greet"
            onCheck={this.setEvent1.bind(this)}
            labelStyle={{'font-weight':'normal', color: '#5c5c5c'}}
            iconStyle={{'fill': '#5c5c5c'}}
          />
          <Checkbox
            disabled={this.state.attending === "Sorry, I cannot make it"}
            label="Wedding Celebration"
            onCheck={this.setEvent2.bind(this)}
            labelStyle={{'font-weight':'normal', color: '#5c5c5c'}}
            iconStyle={{'fill': '#5c5c5c'}}
          />
          <Checkbox
            disabled={this.state.attending === "Sorry, I cannot make it"}
            label="Farewell Get Together"
            onCheck={this.setEvent3.bind(this)}
            labelStyle={{'font-weight':'normal', color: '#5c5c5c'}}
            iconStyle={{'fill': '#5c5c5c'}}
          /><br />

          <p className="transport">Do you require transport to and from each event?</p>
          <p className="sub">Transport will be picking up from and dropping guests off at the Hotel Allegro in Bern</p>
          {TRANSPORT.map((trnsprt) => {
            return <label key={trnsprt} htmlFor={trnsprt}>
              <input disabled={this.state.attending === "Sorry, I cannot make it"} className="trans" id={trnsprt} type="radio" name="transport" value={trnsprt} onChange={this.setTransport.bind(this)} />
              {trnsprt}
            </label>
          })}<br /><br />

          <textarea
            disabled={this.state.attending === "Sorry, I cannot make it"}
            type="text"
            ref="diet"
            className="diet"
            placeholder=" Dietary requirements or needs"
            onChange={this.updateDiet.bind(this)} /><br /><br />

        <input
            disabled={this.state.attending === "Sorry, I cannot make it"}
            type="text"
            ref="songs"
            className="songs"
            placeholder=" Song recommendation(s)"
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
                disabled={this.state.attending === "Sorry, I cannot make it"}
                type="text"
                ref={`fullname${i.toString()}`}
                className="fullname"
                placeholder="Full Name"
                onChange={() => this.updatefullName(i)} />

            <select disabled={this.state.attending === "Sorry, I cannot make it"} className="guest-type" defaultValue="1" onChange={this.handleChange.bind(this, i)}>
              <option disabled="disabled" value="1" hidden="hidden">Type</option>
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
            <RaisedButton label="RSVP" className="RSVPbutton" onTouchTap={this.handleOpen} primary={true} onClick={this.saveGuest.bind(this)} />
            <RaisedButton className="cancelbutton" label="Cancel" onClick={this.cancelForm.bind(this)} id="trip-planning" />
          </div>
          <div>
            <Dialog
              actions={actions}
              modal={true}
              open={this.state.open}
            >
              Thank you for RSVPing!
            </Dialog>
          </div>
          </form>
        </div>
      )
    } else {
        return (
          <div className="rsvpeditor" id="RSVP-section">
            <form className="rsvpform" id="rsvp-form">
              <h2 className="titlersvp">RSVP</h2>
              <div className="afterform">
                <h3 className="titleafter">Gopfriedstutz!</h3>
                <p className="textafter">Looks like you missed last call...</p>
                <img className="imggop" src={gopfried} alt="oops" />
                <p className="textafterbold">Not what you expected?</p>
                <a href="/contact" className="contact-button">Contact Us</a>
              </div>
            </form>
          </div>
      )
    }
  }
}

const mapStateToProps = null

export default connect(mapStateToProps, { addGuest })(RSVP)
